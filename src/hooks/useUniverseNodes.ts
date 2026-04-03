import { useState, useEffect } from 'react'
import { ref, onValue } from 'firebase/database'
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore'
import { db, dbFS } from '../firebase'
import type { UniverseNode } from '../types'
import type { User } from 'firebase/auth'

export function useUniverseNodes(user: User | null) {
  const [publicNodes, setPublicNodes] = useState<UniverseNode[]>([])
  const [privateNodes, setPrivateNodes] = useState<UniverseNode[]>([])
  const [edges, setEdges] = useState<[string, string][]>([])
  const [loading, setLoading] = useState(true)

  // 1. Cargar Nodos Públicos (RTDB) - La base del universo
  useEffect(() => {
    const nodesRef = ref(db, 'nodes')
    const unsubNodes = onValue(nodesRef, (snap) => {
      const data = snap.val()
      if (data) {
        setPublicNodes(Object.values(data))
      }
    })

    const edgesRef = ref(db, 'edges')
    const unsubEdges = onValue(edgesRef, (snap) => {
      const data = snap.val()
      if (data) setEdges(data)
    })

    return () => { unsubNodes(); unsubEdges() }
  }, [])

  // 2. Cargar Nodos Privados (Firestore) - TUS planetas
  useEffect(() => {
    if (!user) {
      setPrivateNodes([])
      setLoading(false)
      return
    }

    const q = collection(dbFS, `users/${user.uid}/nodes`)
    const unsubPrivate = onSnapshot(q, (snap) => {
      const nodes = snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as UniverseNode[]
      setPrivateNodes(nodes)
      setLoading(false)
    }, (err) => {
      console.error('Error cargando nodos privados:', err)
      setLoading(false)
    })

    return () => unsubPrivate()
  }, [user])

  // 3. Guardar/Actualizar Nodo (Principalmente en Firestore para el usuario)
  const saveNode = async (node: UniverseNode) => {
    if (!user) return
    const nodeRef = doc(dbFS, `users/${user.uid}/nodes`, node.id)
    await setDoc(nodeRef, {
      ...node,
      updatedAt: new Date().toISOString()
    })
  }

  // Combinar universos: El privado tiene prioridad sobre el público si coinciden IDs
  const combinedNodes = [...publicNodes]
  privateNodes.forEach(priv => {
    const idx = combinedNodes.findIndex(n => n.id === priv.id)
    if (idx !== -1) {
      combinedNodes[idx] = priv
    } else {
      combinedNodes.push(priv)
    }
  })

  return {
    nodes: combinedNodes,
    edges,
    loading,
    saveNode
  }
}
