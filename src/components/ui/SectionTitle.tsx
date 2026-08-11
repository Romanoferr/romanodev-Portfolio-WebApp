import React from 'react'

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-textPrimary">{title}</h2>
      {subtitle && <p className="mt-2 text-textSecondary">{subtitle}</p>}
    </div>
  )
}
