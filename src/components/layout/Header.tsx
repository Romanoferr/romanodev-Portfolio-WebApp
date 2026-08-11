import React, { useState } from 'react'
import Button from '../ui/Button'
import { Menu, X } from 'lucide-react'
import { m as motion } from '../../utils/motion'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-white">Romanodev</div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-10 text-sm text-neutral-300" aria-label="Main navigation">
            <a className="hover:text-white" href="#services">Serviços</a>
            <a className="hover:text-white" href="#projects">Projetos</a>
            <a className="hover:text-white" href="#process">Processo</a>
            <a className="hover:text-white" href="#about">Sobre</a>
          </nav>
          <button aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.18 }} className="md:hidden border-t border-neutral-800 bg-black/40">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setOpen(false)} className="text-neutral-300">Serviços</a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-neutral-300">Projetos</a>
            <a href="#process" onClick={() => setOpen(false)} className="text-neutral-300">Processo</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-neutral-300">Sobre</a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
