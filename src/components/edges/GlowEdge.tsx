import { type EdgeProps } from '@xyflow/react'

export function GlowEdge({ sourceX, sourceY, targetX, targetY, id, animated }: EdgeProps) {
  const gradId = `eg-${id}`

  return (
    <g>
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1={sourceX} y1={sourceY}
          x2={targetX} y2={targetY}
        >
          <stop offset="0%"   stopColor="white" stopOpacity={0.65} />
          <stop offset="35%"  stopColor="white" stopOpacity={0.18} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
      <line
        x1={sourceX} y1={sourceY}
        x2={targetX} y2={targetY}
        stroke={`url(#${gradId})`}
        strokeWidth={1.5}
        strokeLinecap="round"
        className={animated ? 'react-flow__edge-path react-flow__edge-path--animated' : undefined}
      />
    </g>
  )
}
