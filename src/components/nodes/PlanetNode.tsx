import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'

/**
 * PlanetNode: Esfera 3D generada por CSS3.
 * Identidad visual core del universo ErBolamm.
 */
export const PlanetNode = memo(({ data }: any) => {
  const isCenter = data.label === 'ErBolamm'
  const size = data.size || 50
  const color = data.color || '#888888'

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      {/* Glow exterior */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size * 2.2,
        height: size * 2.2,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}44 0%, transparent 70%)`,
        pointerEvents: 'none'
      }} />

      {/* La Esfera */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${color}FF 0%, #000000AA 100%)`,
        boxShadow: `inset -4px -4px 10px rgba(0,0,0,0.8), 0 0 15px ${color}88`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.5,
        cursor: 'pointer',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        border: isCenter ? '2px solid white' : 'none'
      }}
      className="node-hover-effect"
      >
        {data.emoji || '🪐'}
      </div>

      {/* Label descriptivo */}
      <div style={{
        position: 'absolute',
        bottom: -25,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: 'max-content',
        pointerEvents: 'none'
      }}>
        <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white', textShadow: '0 2px 4px black' }}>
          {data.label}
        </div>
        {data.subtitle && (
          <div style={{ fontSize: '9px', color: '#aaaaaa', whiteSpace: 'nowrap' }}>
            {data.subtitle}
          </div>
        )}
      </div>

      {/* Handles para React Flow (invisibles) */}
      <Handle type="target" position={Position.Top} style={{ visibility: 'hidden' }} />
      <Handle type="source" position={Position.Bottom} style={{ visibility: 'hidden' }} />
    </div>
  )
})
