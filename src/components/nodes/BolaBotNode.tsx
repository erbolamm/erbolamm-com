export function BolaBotNode({ data }: { data: any }) {
  return (
    <div
      className="bolabot-ship"
      onClick={(e) => { e.stopPropagation(); data.onInteract?.() }}
      title="Haz clic para interactuar con BolaBot 🤖"
    >
      <div className="plumbob">
        <div className="plumbob-gem" />
      </div>
      <div className="bolabot-glow" />
      <img src={data.logoSrc} alt="BolaBot" className="bolabot-logo" />
      <div className="bolabot-label">BolaBot</div>
    </div>
  )
}
