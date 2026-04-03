import { useState, useEffect } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Safety: si onAuthStateChanged no dispara en 3s, forzar loading=false
    const timeout = setTimeout(() => setLoading(false), 3000)

    const unsub = onAuthStateChanged(auth, (u) => {
      clearTimeout(timeout)
      setUser(u)
      setLoading(false)
    })
    return () => { unsub(); clearTimeout(timeout) }
  }, [])

  const loginGoogle = async () => {
    if (auth.currentUser) return
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return
      console.error('Login error:', err)
      alert(
        code === 'auth/popup-blocked'
          ? 'El navegador bloqueó el popup. Permití los popups para este sitio e intentá de nuevo.'
          : `Error al iniciar sesión: ${code || 'desconocido'}. Intentá limpiar caché.`
      )
    }
  }

  const logout = () => signOut(auth)

  return { user, loading, loginGoogle, logout }
}
