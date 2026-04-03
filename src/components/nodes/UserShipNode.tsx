import { STATUS_COLORS, STATUS_LABELS } from '../../constants'

export const AVATAR_EMOJIS = [
  '🛸', '🚀', '🚁', '🛩️', '✈️', '🛰️', '🪐',
  '🚗', '🚕', '🏎️', '🚓', '🚑', '🚒', '🚐',
  '🛻', '🚚', '🚛', '🚜', '🛵', '🏍️', '🛺',
  '🚲', '🛼', '🚌', '🚢', '⛵', '🚤', '🛶',
  '🚣', '🛳️', '🚂', '🚊', '🚇', '🚢', '🛥️',
]

export function UserShipNode({ data }: { data: any }) {
  const d = data as {
    name: string
    photo: string
    avatar?: string
    status: string
    emoji: string
    planet?: string
    onInteract?: () => void
    isSelf?: boolean
    connected?: boolean
  }
  const isConnected = d.connected !== false
  const color = isConnected
    ? (STATUS_COLORS[d.status] || STATUS_COLORS.libre)
    : '#555555'
  const emoji = d.emoji || '😎'
  const displayPhoto = d.avatar || d.photo
  const hasPhoto = !!displayPhoto

  return (
    <div
      onClick={(e) => { e.stopPropagation(); if (!d.isSelf) d.onInteract?.() }}
      title={d.isSelf ? `Tú (${STATUS_LABELS[d.status] || 'Libre'})` : `${d.name} — ${STATUS_LABELS[d.status] || 'Libre'}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: d.isSelf ? 'default' : 'pointer',
        position: 'relative',
        animation: 'bolabotFloat 5s ease-in-out infinite',
      }}
    >
      {/* ── Plumbob tipo Sims o Mando de Juego ── */}
      {d.planet === '🕹️ ErBolaMm Galaxy' ? (
        <div style={{
          position: 'absolute',
          top: -30,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 24,
          animation: 'plumbobBob 2.5s ease-in-out infinite',
          zIndex: 3,
          filter: `drop-shadow(0 0 8px #ff007f) drop-shadow(0 0 2px rgba(255,255,255,0.8))`
        }}>
          🎮
        </div>
      ) : (
        <div style={{
          position: 'absolute',
          top: -26,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'plumbobBob 2.5s ease-in-out infinite',
          zIndex: 3,
          filter: isConnected
            ? `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 2px rgba(255,255,255,0.4))`
            : 'drop-shadow(0 0 3px rgba(100,100,100,0.5))',
        }}>
          <div style={{
            width: 11,
            height: 17,
            background: isConnected
              ? `linear-gradient(160deg, ${color}ff 0%, ${color}cc 40%, ${color}77 100%)`
              : 'linear-gradient(160deg, #666 0%, #333 100%)',
            clipPath: 'polygon(50% 0%, 100% 35%, 100% 65%, 50% 100%, 0% 65%, 0% 35%)',
          }} />
        </div>
      )}

      {/* ── Banner de JUGANDO (Visible si está en PaintHub) ── */}
      {d.planet === '🕹️ ErBolaMm Galaxy' && (
        <div style={{
          position: 'absolute',
          top: -45,
          background: 'rgba(255, 0, 127, 0.9)',
          color: 'white',
          fontSize: 7,
          fontWeight: 900,
          padding: '2px 6px',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          zIndex: 10,
          boxShadow: '0 0 10px #ff007f',
          animation: 'playingPulse 2s ease-in-out infinite',
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}>
          🎮 EN ARENA
        </div>
      )}

      {/* ── Cuerpo del avatar — halo blanco independiente del status ── */}
      <div style={{
        position: 'relative',
        width: 34,
        height: 34,
        flexShrink: 0,
      }}>
        {/* Halo/Escudo trasero tipo Glassmorphism ligero */}
        {!d.avatar && (
          <div style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            pointerEvents: 'none',
          }} />
        )}

        {/* Foto o avatar principal */}
        {hasPhoto ? (
          <img
            src={displayPhoto}
            alt={d.name}
            referrerPolicy="no-referrer"
            style={{
              width: 34,
              height: 34,
              borderRadius: d.avatar ? 4 : '50%',
              objectFit: d.avatar ? 'contain' : 'cover',
              background: d.avatar ? 'transparent' : undefined,
              border: 'none',
              display: 'block',
              position: 'relative',
              zIndex: 1,
              opacity: isConnected ? 1 : 0.4,
            }}
          />
        ) : (
          <div style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            position: 'relative',
            zIndex: 1,
            opacity: isConnected ? 1 : 0.4,
          }}>
            {d.name.charAt(0)}
          </div>
        )}

        {/* Cúpula de cristal 3D (Efecto Bola de Cristal) frontal */}
        {!d.avatar && (
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 25%, transparent 60%, rgba(0,0,0,0.6) 100%)',
            boxShadow: 'inset 0 0 6px rgba(255,255,255,0.3)',
            pointerEvents: 'none',
            zIndex: 2,
          }} />
        )}
        {/* Vehículo del usuario (Emoji) centrado en la base */}
        <div style={{
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          zIndex: 2,
          filter: 'drop-shadow(0 3px 4px rgba(0,0,0,0.7))',
          opacity: isConnected ? 1 : 0.6,
        }}>
          {emoji}
        </div>
      </div>

      {/* Nombre debajo */}
      <span style={{
        fontSize: 8,
        fontWeight: 600,
        color: isConnected ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.3)',
        whiteSpace: 'nowrap',
        textShadow: '0 1px 3px rgba(0,0,0,0.9)',
        marginTop: 3,
        maxWidth: 60,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {d.isSelf ? 'Tú' : d.name.split(' ')[0]}
      </span>
    </div>
  )
}
