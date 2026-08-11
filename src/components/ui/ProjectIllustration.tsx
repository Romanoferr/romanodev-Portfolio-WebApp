import React from 'react'

export default function ProjectIllustration({ variant = 1, className = '' }: { variant?: number; className?: string }) {
  if (variant === 2) {
    return (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="6" y="10" width="68" height="56" rx="6" fill="#0F1724" stroke="#263244" strokeOpacity="0.18" />
        <rect x="16" y="20" width="48" height="8" rx="2" fill="#00AEEF" />
        <rect x="16" y="34" width="36" height="6" rx="2" fill="#1F2937" />
        <rect x="16" y="44" width="24" height="6" rx="2" fill="#1F2937" />
      </svg>
    )
  }

  if (variant === 3) {
    return (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="8" y="8" width="64" height="64" rx="10" fill="#071023" stroke="#263244" strokeOpacity="0.18" />
        <circle cx="40" cy="36" r="10" fill="#00AEEF" />
        <rect x="26" y="52" width="28" height="6" rx="3" fill="#1F2937" />
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="6" y="6" width="68" height="68" rx="8" fill="#071023" stroke="#263244" strokeOpacity="0.18" />
      <path d="M18 28 H62" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 40 H46" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="56" cy="52" r="6" fill="#00AEEF" />
    </svg>
  )
}
