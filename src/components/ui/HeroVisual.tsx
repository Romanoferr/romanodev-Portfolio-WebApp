import React from 'react'
import { m } from '../../utils/motion'

const nodes = [
  { cx: 60, cy: 60 },
  { cx: 120, cy: 90 },
  { cx: 200, cy: 60 },
  { cx: 280, cy: 100 },
  { cx: 160, cy: 150 },
  { cx: 80, cy: 180 },
]

export default function HeroVisual({ className = '' }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="360" height="260" rx="8" fill="rgba(255,255,255,0.01)" />
        {/* grid lines */}
        <g stroke="#0EAEEF" strokeOpacity="0.06" strokeWidth="1">
          <path d="M20 40 L340 40" />
          <path d="M20 80 L340 80" />
          <path d="M20 120 L340 120" />
          <path d="M20 160 L340 160" />
          <path d="M20 200 L340 200" />
        </g>
        {/* connections */}
        <g stroke="#00AEEF" strokeOpacity="0.12" strokeWidth="1.6" strokeLinecap="round">
          <line x1="60" y1="60" x2="120" y2="90" />
          <line x1="120" y1="90" x2="200" y2="60" />
          <line x1="200" y1="60" x2="280" y2="100" />
          <line x1="160" y1="150" x2="220" y2="130" />
          <line x1="80" y1="180" x2="160" y2="150" />
        </g>
        {/* animated nodes */}
        <g filter="url(#soft)">
          {nodes.map((n, i) => (
            // using motion-enabled circle for subtle entrance
            <m.circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={4}
              fill="#00AEEF"
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: 'easeOut' }}
            />
          ))}
        </g>
        {/* subtle boxes */}
        <g stroke="#263244" strokeOpacity="0.18" strokeWidth="1">
          <rect x="8" y="8" width="56" height="36" rx="4" />
          <rect x="296" y="12" width="56" height="24" rx="4" />
          <rect x="200" y="180" width="120" height="60" rx="6" />
        </g>
      </svg>
    </div>
  )
}
