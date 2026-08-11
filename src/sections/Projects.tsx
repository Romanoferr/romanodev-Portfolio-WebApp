import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { m as motion } from '../utils/motion'
import ProjectIllustration from '../components/ui/ProjectIllustration'

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-primaryBg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Projetos" subtitle="Amostras de trabalhos e abordagens (placeholders)." />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
          <motion.div key={n} whileHover={{ scale: 1.02 }} className="rounded-md bg-neutral-900/50 p-6">
            <div className="h-40 bg-black/20 rounded-md flex items-center p-4 gap-4">
              <ProjectIllustration variant={n} className="w-24 h-24 flex-none" />
              <div>
                <h5 className="text-lg font-semibold">Projeto {n} — Solução sob medida</h5>
                <p className="text-neutral-400 text-sm mt-1">Entrega focada em resultado: arquitetura limpa, performance e UX orientada a conversão.</p>
                <p className="text-neutral-500 text-xs mt-2">Stack, papel exercido e impacto em métricas chave (ex.: +120% de velocidade).</p>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
