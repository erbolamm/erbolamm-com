import { useState, useEffect, useRef } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from './firebase'
import { useAuth } from './hooks/useAuth'
import { usePresence } from './hooks/usePresence'
import './App.css'

const TUNNEL_DURATION = 2500 // ms

interface Project {
  id: string
  name: string
  pillar: string
  type: string
  description: string
  urls: Record<string, string>
  stats?: Record<string, string | number>
  status: string
}

interface Pillar {
  label: string
  color: string
  emoji: string
}

interface Universe {
  pillars: Record<string, Pillar>
  projects: Project[]
}

// Obtener la URL principal de un proyecto (prioridad: web > landing > playstore > github > pub > primera que haya)
function getMainUrl(urls: Record<string, string>): string {
  return urls.web || urls.landing || urls.playstore || urls.appstore || urls.github || urls.pub || Object.values(urls)[0] || '#'
}

// Icono del tipo de proyecto
function getTypeIcon(type: string): string {
  const icons: Record<string, string> = {
    app: '📱', web: '🌐', extension: '🧩', package: '📦', device: '🤖', client: '💻'
  }
  return icons[type] || '📁'
}

import { FlowGraph } from './components/FlowGraph'
import { HubIntro } from './components/HubIntro'

function App() {
  const [universe, setUniverse] = useState<Universe | null>(null)
  const [tunnelDone, setTunnelDone] = useState(false)
  const [introDone, setIntroDone] = useState(false)
  
  // Auth & Presence (Fase 0)
  const { user, loading: authLoading, loginGoogle, logout } = useAuth()
  const { onlineUsers } = usePresence(user)
  
  // Lazy load para el Hub
  const hubRef = useRef<HTMLDivElement>(null)
  const [hubVisible, setHubVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setHubVisible(true)
        }
      },
      { rootMargin: '200px' }
    )
    if (hubRef.current) observer.observe(hubRef.current)
    return () => observer.disconnect()
  }, [])

  // Tunnel de entrada — desaparece tras la animación
  useEffect(() => {
    const timer = setTimeout(() => setTunnelDone(true), TUNNEL_DURATION)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const nodesRef = ref(db, 'nodes')
    const unsubscribe = onValue(nodesRef, (snapshot: any) => {
      const data = snapshot.val()
      if (!data) return

      const nodesArray = Object.values(data) as any[]
      
      const dynamicPillars: Record<string, Pillar> = {
        creacion: { label: 'Creación', color: '#ff4e83', emoji: '✏️' },
        educacion: { label: 'Educación', color: '#1976D2', emoji: '🎓' },
        cultura: { label: 'Cultura', color: '#388E3C', emoji: '🎭' },
        herramientas: { label: 'Herramientas Dev', color: '#FF8F00', emoji: '🔧' },
        hardware: { label: 'Hardware / IoT', color: '#FFB300', emoji: '🤖' }
      }
      
      nodesArray.forEach((n) => {
        if (n.type === 'pilar' || n.type === 'centro') {
          dynamicPillars[n.id] = {
            label: n.label,
            color: n.color || '#888',
            emoji: n.emoji || '✨'
          }
        }
      })

      const projects: Project[] = nodesArray
        .filter(n => n.type !== 'pilar' && n.type !== 'centro' && n.id !== 'erbolamm')
        .map(n => ({
          id: n.id,
          name: n.label || '',
          pillar: n.pillar || '',
          type: n.type || 'web',
          description: n.subtitle || '',
          urls: { 
            web: n.url || (n.urls && typeof n.urls === 'object' ? Object.values(n.urls)[0] : '') || '' 
          },
          stats: n.stats || {},
          status: n.status || 'published'
        }))

      setUniverse({ pillars: dynamicPillars, projects })
    })

    return () => unsubscribe()
  }, [])

  // Mientras carga, no renderizar nada de cards
  const pillars = universe?.pillars ?? {}
  const projects = (universe?.projects ?? []).filter(p => p.status !== 'archived')
  
  return (
    <div className="page">
      {/* ── BOTÓN DE AUTH FLOTANTE (FASE 0) ── */}
      <div className="auth-floating-menu">
        {authLoading ? (
          <span className="auth-loading-text">🌌 Sincronizando...</span>
        ) : user ? (
          <div className="user-profile-badge">
            <img src={user.photoURL || ''} alt={user.displayName || ''} className="user-avatar-small" />
            <div className="user-info-hub">
              <span className="user-name-hub">{user.displayName}</span>
              <span className="user-online-count">🟢 {onlineUsers.length} online</span>
            </div>
            <button onClick={logout} className="auth-btn-hub logout">Salir</button>
          </div>
        ) : (
          <button onClick={loginGoogle} className="auth-btn-hub login">
            🚀 Entrar al Universo
          </button>
        )}
      </div>

      {/* ── TUNNEL ESPACIAL DE ENTRADA ── */}
      {!tunnelDone && (
        <div className="tunnel-overlay">
          <div className="tunnel-ring tunnel-ring-1" />
          <div className="tunnel-ring tunnel-ring-2" />
          <div className="tunnel-ring tunnel-ring-3" />
          <div className="tunnel-ring tunnel-ring-4" />
          <div className="tunnel-ring tunnel-ring-5" />
          <div className="tunnel-ring tunnel-ring-6" />
          <div className="tunnel-flash" />
        </div>
      )}

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-glow" />
        <p className="hero-label">Universo Digital de</p>
        <h1 className="hero-title">ErBolamm</h1>
        <p className="hero-sub">
          Diseñador · Creador · Desarrollador Flutter · Autor de Carnaval
        </p>
        <a href="#hub" className="hero-btn">Explora el universo ↓</a>
      </header>

      {/* ── SECCIÓN IA ASISTENTE ── */}
      <section id="asistente" className="ai-section">
        <h2 className="section-title">✨ Tu guía en el universo</h2>
        <p className="section-sub">
          ErBolamm cuenta con una inteligencia artificial propia, entrenada con el ADN de todos sus proyectos. 
          No es solo un chat; es tu asistente para navegar por este ecosistema creativo de forma interactiva y visual.
        </p>
        <div className="ai-grid">
          <div className="ai-card">
            <span className="ai-icon">🧠</span>
            <h3 className="ai-card-title">Conoce el código</h3>
            <p className="ai-card-text">Resuelve dudas técnicas y explica la arquitectura detrás de cada aplicación y paquete.</p>
          </div>
          <div className="ai-card">
            <span className="ai-icon">🌌</span>
            <h3 className="ai-card-title">Navega contigo</h3>
            <p className="ai-card-text">Una brújula inteligente que entiende la interconexión entre cada nodo de este universo digital.</p>
          </div>
          <div className="ai-card">
            <span className="ai-icon">🎯</span>
            <h3 className="ai-card-title">Selección Nativa</h3>
            <p className="ai-card-text">Ahora el universo es nativo. Haz clic en los planetas para abrir proyectos al instante.</p>
          </div>
        </div>
      </section>

      {/* ── VENTANA CON EL GRAFO NATIVO ── */}
      <section id="hub" className="hub-section" ref={hubRef} style={{ height: '100vh', padding: 0, overflow: 'hidden' }}>
        {hubVisible ? (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {!introDone && <HubIntro onEnter={() => setIntroDone(true)} />}
            <FlowGraph user={user} />
            {/* Superposición sutil para que no se "trague" el scroll de la página si no quieres */}
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '20px', pointerEvents: 'none' }}>
              <span style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px', fontSize: '10px' }}>
                NATIVO • SCROLL PARA CONTINUAR
              </span>
            </div>
          </div>
        ) : (
          <div className="hub-placeholder" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            🌌 Cargando universo...
          </div>
        )}
      </section>

      {/* ── TARJETAS DEL ECOSISTEMA ── */}
      <section className="ecosystem-section">
        <h2 className="section-title">Explora el Ecosistema</h2>
        <p className="section-sub">
          Cada proyecto es una pieza de un todo interconectado.
        </p>
        <div className="cards-grid">
          {projects.map((p) => {
            const pillar = pillars[p.pillar]
            const color = pillar?.color ?? '#888'
            const emoji = pillar?.emoji ?? getTypeIcon(p.type)
            const mainUrl = getMainUrl(p.urls)
            return (
              <a
                key={p.id}
                href={mainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <span className="card-emoji">{emoji}</span>
                <h3 className="card-name">{p.name}</h3>
                <p className="card-desc">{p.description}</p>
                {p.stats?.downloads && (
                  <p className="card-stats">📊 {p.stats.downloads} descargas</p>
                )}
                <div className="card-badges">
                  <span className="card-tag" style={{ background: color + '22', color, border: `1px solid ${color}44` }}>
                    {pillar?.label ?? p.pillar}
                  </span>
                  <span className="card-type">{getTypeIcon(p.type)} {p.type}</span>
                  {p.status === 'wip' && <span className="card-wip">🚧 En desarrollo</span>}
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="bio-section">
        <div className="bio-inner">
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(45deg, #BA68C8, #4FC3F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>👨‍💻</div>
          <div>
            <h2 className="bio-title">¿Quién es ErBolamm?</h2>
            <p className="bio-text">
              Javier Mateo — conocido como <strong>El Bola de Marbella</strong>.
              Diseñador gráfico, autor de coplas de Carnaval con más de 20 años en los escenarios,
              creador autodidacta de apps Flutter con millones de descargas.
              <br /><br />
              Todo lo que ves aquí nació del esfuerzo, la creatividad y la persistencia.
              Sin estudios formales. Con muchas ganas.
            </p>
          </div>
        </div>
      </section>


      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 ErBolamm · Javier Mateo · Marbella</p>
        <div className="footer-links">
          <a href="https://apliarte.com" target="_blank" rel="noopener noreferrer">ApliArte</a>
          <a href="https://app.calcaapp.com" target="_blank" rel="noopener noreferrer">CalcaApp</a>
          <a href="https://elbolademarbella.com" target="_blank" rel="noopener noreferrer">El Bola</a>
        </div>
      </footer>

    </div>
  )
}

export default App
