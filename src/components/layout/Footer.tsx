import React from 'react'
import { contact } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Romanodev — Tecnologia para a resolução de problemas reais.</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="text-neutral-700">•</span>
          <a className="hover:text-white" href="#about">Sobre</a>
        </div>
      </div>
    </footer>
  )
}
