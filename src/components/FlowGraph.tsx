import { useState, useCallback, useEffect } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  type OnConnect,
  type Node,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import { PlanetNode } from './nodes/PlanetNode'
import { CristalOverlay } from './CristalOverlay'
import { GlowEdge } from './edges/GlowEdge'
import { useGraphData } from '../hooks/useGraphData'
import { useHashRouter } from '../hooks/useHashRouter'
import { useAudioManager } from '../hooks/useAudioManager'
import { useUniverseNodes } from '../hooks/useUniverseNodes'
import type { User } from 'firebase/auth'

// Configuración de tipos de componente
const nodeTypes = {
  planet: PlanetNode,
  bolabot: ({ data }: any) => (
    <div style={{ transform: 'translate(-50%, -50%)', width: 40, height: 40 }}>
      <img src={data.logoSrc} alt="BolaBot" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px #ff4444)' }} />
      <div style={{ position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)', color: '#ff4444', fontSize: 10, fontWeight: 'bold' }}>BolaBot</div>
    </div>
  )
}

const edgeTypes = {
  glow: GlowEdge
}

/**
 * FlowGraph: El núcleo interactivo del universo ErBolamm.
 * Adaptado para erbolamm-com con la mística de galaxy.
 */
export const FlowGraph: React.FC<{ user: User | null }> = ({ user }) => {
  const [isSimsMenuOpen, setSimsMenuOpen] = useState(false)
  const { nodes: universeNodes, edges: universeEdges, loading: universeLoading, saveNode } = useUniverseNodes(user)
  const { rfNodes, rfEdges } = useGraphData(universeNodes, universeEdges, setSimsMenuOpen)
  const { navigate } = useHashRouter()
  const { volume, changeVolume, toggleSpeaker, isSpeakerMuted } = useAudioManager()

  // Sincronizar estados de React Flow
  const [nodes, setNodes, onNodesChange] = useNodesState(rfNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(rfEdges)

  useEffect(() => { setNodes(rfNodes) }, [rfNodes, setNodes])
  useEffect(() => { setEdges(rfEdges) }, [rfEdges, setEdges])

  const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onNodeClick = useCallback((_: any, node: Node) => {
    if (node.id === 'erbolamm') return
    const url = node.data?.url as string | undefined
    if (url && url.trim() !== '') {
      window.open(url, '_blank')
    } else {
      navigate('/' + node.id)
    }
  }, [navigate])

  const onNodeDragStop = useCallback((_: any, node: Node) => {
    if (!user) return
    // Persistir posición en Firestore
    saveNode({
      id: node.id,
      label: node.data.label as string,
      color: node.data.color as string,
      x: node.position.x,
      y: node.position.y,
      emoji: node.data.emoji as string,
      size: node.data.size as number,
      type: node.data.nodeType as string,
      subtitle: node.data.subtitle as string,
      url: node.data.url as string
    })
  }, [user, saveNode])

  if (universeLoading) {
    return (
      <div style={{ width: '100%', height: '100%', background: '#08080c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'white', fontSize: '1.2rem', animation: 'pulse 1.5s infinite alternate' }}>
          🌌 Sincronizando Universo...
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', height: '100%', background: '#08080c' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes as any}
        connectionMode={ConnectionMode.Loose}
        fitView
        snapToGrid
        snapGrid={[20, 20]}
      >
        <Background color="#1a1a2e" gap={40} />
        <Controls showInteractive={false} />
        
        {/* Panel Superior: HUD y Logos */}
        <Panel position="top-left" style={{ margin: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15, color: 'white', fontFamily: "'Outfit', sans-serif" }}>
            <div style={{ fontSize: 24, fontWeight: 'black', background: 'linear-gradient(to right, #BA68C8, #4FC3F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Universo Digital de ErBolamm
            </div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>v4.0.0 Alpha</div>
          </div>
        </Panel>

        {/* HUD Inferior: Controles de Audio y Menús */}
        <Panel position="bottom-center" style={{ marginBottom: 30 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '12px 24px',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <button 
              onClick={toggleSpeaker}
              style={{ background: 'none', border: 'none', color: isSpeakerMuted ? '#ff4444' : '#4cff4c', fontSize: 20, cursor: 'pointer' }}
            >
              {isSpeakerMuted ? '🔇' : '🔊'}
            </button>
            <input 
              type="range" 
              min="0" max="1" step="0.1" 
              value={volume} 
              onChange={(e) => changeVolume(parseFloat(e.target.value))} 
              style={{ cursor: 'pointer', accentColor: '#BA68C8' }}
            />
            <div style={{ width: 1, height: 20, background: 'rgba(255, 255, 255, 0.2)' }} />
            <button 
              onClick={() => navigate('/Juegos')}
              style={{ background: 'none', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            >
              🎮 JUEGOS
            </button>

            {user && (
              <>
                <div style={{ width: 1, height: 20, background: 'rgba(255, 255, 255, 0.2)' }} />
                <button 
                  onClick={() => {
                    const id = 'node-' + Date.now()
                    saveNode({ 
                      id, 
                      label: 'Nuevo Planeta', 
                      emoji: '🪐', 
                      type: 'proyecto',
                      pillar: 'erbolamm',
                      color: '#BA68C8'
                    })
                  }}
                  style={{ background: 'var(--red)', border: 'none', padding: '6px 14px', borderRadius: '20px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px' }}
                >
                  🚀 CREAR NODO
                </button>
              </>
            )}
          </div>
        </Panel>
      </ReactFlow>

      {/* Menú de Sims (Interacción BolaBot) */}
      {isSimsMenuOpen && (
        <CristalOverlay>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: 20 }}>Interacción con BolaBot</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15 }}>
              <button style={btnStyle} onClick={() => alert('Hola!')}>👋 Saludar</button>
              <button style={btnStyle} onClick={() => alert('Jiji!')}>🎭 Chiste</button>
              <button style={btnStyle}>💬 Chatear</button>
              <button style={btnStyle} onClick={() => setSimsMenuOpen(false)}>❌ Cerrar</button>
            </div>
          </div>
        </CristalOverlay>
      )}
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  padding: '15px',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.2s'
}
