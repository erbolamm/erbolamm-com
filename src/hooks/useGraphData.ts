import { useEffect, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3-force'
import type { Node, Edge } from '@xyflow/react'
import type { UniverseNode, UniverseData } from '../types'
import { BOLABOT_ID, BOLABOT_TRAVEL_MS, BOLABOT_ANIM_FRAMES } from '../constants'

const bolabotPlaceholder = 'https://api.dicebear.com/7.x/bottts/svg?seed=bolabot&backgroundColor=b71c1c'

export function useGraphData(nodes: UniverseNode[], edges: [string, string][], setSimsMenu: (open: boolean) => void) {
  const [rfNodes, setRfNodes] = useState<Node[]>([])
  const [rfEdges, setRfEdges] = useState<Edge[]>([])
  const [counts, setCounts] = useState({ nodes: 0, edges: 0 })

  const rawRef = useRef<UniverseData | null>(null)
  const originalPositionsRef = useRef<Map<string, { x: number; y: number }>>(new Map())
  const childrenMapRef = useRef<Map<string, string[]>>(new Map())
  const edgeAdjRef = useRef<Map<string, string[]>>(new Map())
  const bolabotCurrentNodeRef = useRef('')
  const bolabotTargetRef = useRef<{ from: { x: number; y: number }; to: { x: number; y: number }; frame: number } | null>(null)
  const bolabotIntervalRef = useRef<number | null>(null)

  const applyUniverseData = useCallback((data: UniverseData) => {
    try {
      rawRef.current = data
      setCounts({ nodes: data.nodes.length, edges: data.edges.length })

      const childrenMap = new Map<string, string[]>()
      data.nodes.forEach(n => {
        if (n.pillar && n.status !== 'disabled') {
          if (!childrenMap.has(n.pillar)) childrenMap.set(n.pillar, [])
          childrenMap.get(n.pillar)!.push(n.id)
        }
      })
      childrenMapRef.current = childrenMap

      const SIZES_BY_DEPTH = [72, 58, 46, 36, 28, 22]
      const getSize = (depth: number) => SIZES_BY_DEPTH[Math.min(depth, SIZES_BY_DEPTH.length - 1)]

      const darkenColor = (hex: string, depth: number): string => {
        if (depth === 0) return hex
        const r = parseInt(hex.slice(1, 3), 16) || 128
        const g = parseInt(hex.slice(3, 5), 16) || 128
        const b = parseInt(hex.slice(5, 7), 16) || 128
        const factor = Math.pow(0.82, depth)
        return `#${Math.round(r * factor).toString(16).padStart(2, '0')}${Math.round(g * factor).toString(16).padStart(2, '0')}${Math.round(b * factor).toString(16).padStart(2, '0')}`
      }

      const layout = new Map<string, { x: number; y: number; depth: number; parentNodeId?: string; pilarColor?: string }>()
      const DIST_BY_LEVEL = [280, 200, 150, 120, 100]
      const getDist = (level: number) => DIST_BY_LEVEL[Math.min(level, DIST_BY_LEVEL.length - 1)]

      const placeChildren = (parentId: string, parentX: number, parentY: number, level: number, pilarColor?: string, visited = new Set<string>()) => {
        if (visited.has(parentId)) return
        visited.add(parentId)
        const children = (childrenMap.get(parentId) || []).filter(cid => {
          const d = data.nodes.find(dn => dn.id === cid)
          return d && d.status !== 'disabled' && !visited.has(cid)
        })
        if (children.length === 0) return

        const dist = getDist(level)
        const stepAngle = (Math.PI * 2) / children.length
        let currentAngle = -Math.PI / 2

        for (const childId of children) {
          const childNode = data.nodes.find(dn => dn.id === childId)
          const inheritedColor = pilarColor || childNode?.color || '#888888'
          const childX = parentX + Math.cos(currentAngle) * dist
          const childY = parentY + Math.sin(currentAngle) * dist
          layout.set(childId, { x: childX, y: childY, depth: level + 1, parentNodeId: parentId, pilarColor: inheritedColor })
          placeChildren(childId, childX, childY, level + 1, inheritedColor, new Set(visited))
          currentAngle += stepAngle
        }
      }

      layout.set('erbolamm', { x: 0, y: 0, depth: 0 })
      const rootChildren = (childrenMap.get('erbolamm') || []).filter(cid => {
        const d = data.nodes.find(dn => dn.id === cid)
        return d && d.status !== 'disabled'
      })
      if (rootChildren.length > 0) {
        const rootDist = getDist(0)
        const rootStep = (Math.PI * 2) / rootChildren.length
        let rootAngle = -Math.PI / 2 
        for (const childId of rootChildren) {
          const childNode = data.nodes.find(dn => dn.id === childId)
          const color = childNode?.color || '#888888'
          const x = Math.cos(rootAngle) * rootDist
          const y = Math.sin(rootAngle) * rootDist
          layout.set(childId, { x, y, depth: 1, parentNodeId: 'erbolamm', pilarColor: color })
          placeChildren(childId, x, y, 1, color)
          rootAngle += rootStep
        }
      }

      const mapped = data.nodes
        .filter(n => n.status !== 'disabled')
        .map((n: UniverseNode) => {
          const layoutData = layout.get(n.id)
          const depth = layoutData?.depth ?? 2
          const size = getSize(depth)
          const baseColor = layoutData?.pilarColor || n.color || '#888888'
          return {
            id: n.id,
            type: 'planet' as const,
            position: { x: layoutData?.x || 0, y: layoutData?.y || 0 },
            data: { label: n.label, emoji: n.emoji, color: n.id === 'erbolamm' ? '#ffffff' : darkenColor(baseColor, Math.max(0, depth - 1)), size, nodeType: n.type || 'proyecto', subtitle: n.subtitle || '', url: n.url || '', depth }
          }
        })

      const nodesForD3 = mapped.map(n => ({ ...n, fx: n.id === 'erbolamm' ? 0 : undefined, fy: n.id === 'erbolamm' ? 0 : undefined }))
      const activeNodeIds = new Set(nodesForD3.map((n: any) => n.id))

      const simulation = d3.forceSimulation(nodesForD3 as any)
        .force('collide', d3.forceCollide().radius((d: any) => (d.data.size / 2) + 40))
        .force('x', d3.forceX((d: any) => d.position.x).strength(0.4))
        .force('y', d3.forceY((d: any) => d.position.y).strength(0.4))
        .stop()

      for (let i = 0; i < 100; i++) simulation.tick()
      nodesForD3.forEach((d3Node: any, i) => { mapped[i].position.x = d3Node.x; mapped[i].position.y = d3Node.y })

      const origMap = new Map<string, { x: number; y: number }>()
      mapped.forEach(n => origMap.set(n.id, { ...n.position }))
      originalPositionsRef.current = origMap

      // Inicializar nodos filtrando el bot si ya existía y añadiéndolo al principio
      setRfNodes(() => {
        const real = mapped.filter(n => n.id !== BOLABOT_ID)
        const startNode = real[0]
        bolabotCurrentNodeRef.current = startNode?.id || ''
        return [ ...real, { id: BOLABOT_ID, type: 'bolabot' as const, position: startNode?.position || { x: 0, y: 0 }, data: { logoSrc: bolabotPlaceholder, onInteract: () => setSimsMenu(true) }, draggable: false } as Node ]
      })

      const adjMap = new Map<string, string[]>()
      data.edges.forEach(([s, t]) => {
        if (!activeNodeIds.has(s) || !activeNodeIds.has(t)) return
        if (!adjMap.has(s)) adjMap.set(s, [])
        if (!adjMap.has(t)) adjMap.set(t, [])
        adjMap.get(s)!.push(t)
        adjMap.get(t)!.push(s)
      })
      edgeAdjRef.current = adjMap

      if (bolabotIntervalRef.current) clearInterval(bolabotIntervalRef.current)
      const posMap = new Map(mapped.map(n => [n.id, n.position]))

      bolabotIntervalRef.current = window.setInterval(() => {
        const neighbors = adjMap.get(bolabotCurrentNodeRef.current)
        if (!neighbors?.length) return
        const nextId = neighbors[Math.floor(Math.random() * neighbors.length)]
        const fromPos = posMap.get(bolabotCurrentNodeRef.current)
        const toPos = posMap.get(nextId)
        if (!fromPos || !toPos) return
        bolabotCurrentNodeRef.current = nextId
        bolabotTargetRef.current = { from: fromPos, to: toPos, frame: 0 }
        const animate = () => {
          const target = bolabotTargetRef.current
          if (!target) return
          target.frame++
          const t = Math.min(target.frame / BOLABOT_ANIM_FRAMES, 1)
          const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          const x = target.from.x + (target.to.x - target.from.x) * ease
          const y = target.from.y + (target.to.y - target.from.y) * ease
          setRfNodes(nds => nds.map(n => n.id === BOLABOT_ID ? { ...n, position: { x, y } } : n))
          if (t < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }, BOLABOT_TRAVEL_MS)

      setRfEdges(data.edges.filter(([s, t]) => activeNodeIds.has(s) && activeNodeIds.has(t))
        .map(([source, target]) => ({ id: `e-${source}-${target}`, source, target, type: 'glow', animated: true })))
    } catch (err) { console.error('[useGraphData] ERROR:', err) }
  }, [setSimsMenu])

  useEffect(() => {
    if (nodes.length > 0) {
      applyUniverseData({ nodes, edges, showcaseNodes: [] })
    }
  }, [nodes, edges, applyUniverseData])

  useEffect(() => {
    return () => { if (bolabotIntervalRef.current) clearInterval(bolabotIntervalRef.current) }
  }, [])

  return { rfNodes, rfEdges, counts, setRfNodes, setRfEdges, setCounts, rawRef, originalPositionsRef, childrenMapRef, edgeAdjRef, bolabotCurrentNodeRef, bolabotTargetRef, bolabotIntervalRef }
}
