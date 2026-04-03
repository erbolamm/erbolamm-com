import { useState, useEffect } from 'react'
import { ref, onValue, set, onDisconnect, serverTimestamp, type DatabaseReference } from 'firebase/database'
import { db } from '../firebase'
import type { OnlineUser, InboxMessage } from '../types'
import type { User } from 'firebase/auth'

export function usePresence(user: User | null) {
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([])
  const [messages, setMessages] = useState<InboxMessage[]>([])

  useEffect(() => {
    // 1. Escuchar usuarios online
    const presenceRef = ref(db, 'presence')
    const unsubPresence = onValue(presenceRef, (snap) => {
      const data = snap.val()
      if (!data) {
        setOnlineUsers([])
        return
      }
      const list = Object.entries(data).map(([uid, val]: [string, any]) => ({
        uid,
        ...val
      })) as OnlineUser[]
      setOnlineUsers(list)
    })

    // 2. Gestionar mi presencia si estoy logueado
    let myRef: DatabaseReference | null = null
    if (user) {
      myRef = ref(db, `presence/${user.uid}`)
      
      const userData: OnlineUser = {
        uid: user.uid,
        name: user.displayName || 'Explorador',
        photo: user.photoURL || '',
        status: 'libre',
        planet: 'Home',
        emoji: '🌍',
        avatar: '' // Placeholder para futuro editor
      }

      set(myRef, {
        ...userData,
        lastActive: serverTimestamp()
      })

      // Limpieza automática al desconectar
      onDisconnect(myRef).remove()
    }

    // 3. Escuchar mensajes (Inbox)
    let unsubInbox = () => {}
    if (user) {
      const inboxRef = ref(db, `inbox/${user.uid}`)
      unsubInbox = onValue(inboxRef, (snap) => {
        const data = snap.val()
        if (!data) {
          setMessages([])
          return
        }
        const msgs = Object.values(data) as InboxMessage[]
        setMessages(msgs.sort((a, b) => b.ts - a.ts))
      })
    }

    return () => {
      unsubPresence()
      unsubInbox()
      if (myRef) {
        // Al desmontar, no removemos inmediatamente para evitar parpadeos en hot reload
        // Pero onDisconnect se encargará si se cierra la pestaña
      }
    }
  }, [user])

  return { onlineUsers, messages }
}
