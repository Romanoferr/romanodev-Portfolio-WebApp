import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { m as motion } from '../utils/motion'

const steps = [
  { title: 'Diagnóstico', desc: 'Conversa inicial para entender necessidades e prioridades.' },
  { title: 'Proposta', desc: 'Proposta objetiva com escopo e opções de investimento.' },
  { title: 'Construção', desc: 'Entrega iterativa com checkpoints e validação do cliente.' },
  { title: 'Entrega & Suporte', desc: 'Handover, documentação e opções de suporte contínuo.' }
]

export default function Process() {
  return (
    <section id="process" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Processo de trabalho" subtitle="Uma abordagem prática e transparente." />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-4 rounded-md bg-neutral-900/30">
            <div className="text-brand font-semibold">{`0${i + 1}`}</div>
            <h4 className="mt-2 font-medium">{s.title}</h4>
            <p className="text-neutral-400 text-sm mt-1">{s.desc}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}
