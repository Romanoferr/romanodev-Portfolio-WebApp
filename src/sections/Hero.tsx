import React from 'react'
import { m as motion } from '../utils/motion'
import Button from '../components/ui/Button'
import HeroVisual from '../components/ui/HeroVisual'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[72vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Soluções em <span className="text-brand">Web</span> e <span className="text-brand">Automação</span>
              <br />que resolvem problemas reais
            </motion.h1>
            <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="mt-6 text-textSecondary text-lg max-w-xl">
              Desenvolvimento de sites, sistemas personalizados e automação de processos para empresas que precisam de resultados mensuráveis e operação confiável.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-8 flex items-center gap-4">
              <a href="#contact"><Button variant="primary" className="glow-brand">Solicitar orçamento</Button></a>
              <a href="#projects" className="text-textSecondary hover:text-textPrimary">Ver projetos</a>
            </motion.div>
          </div>
          <div className="md:col-span-5 relative">
            <HeroVisual className="hero-visual" />
          </div>
        </div>
      </div>
    </section>
  )
}
