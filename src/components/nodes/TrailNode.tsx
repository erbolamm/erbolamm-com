export function TrailNode({ data }: { data: any }) {
  return (
    <div style={{
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: data.color || 'rgba(255,255,255,0.7)',
      boxShadow: `0 0 8px 3px ${data.color || 'rgba(255,255,255,0.7)'}`,
      animation: 'trailFade 0.9s ease-out forwards',
      pointerEvents: 'none',
    }} />
  )
}
