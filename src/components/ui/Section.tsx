import React from 'react'

export default function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="py-12">
      {children}
    </section>
  )
}
