import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { CheckCircle, ShieldCheck, Clock } from 'lucide-react'
import { m as motion } from '../utils/motion'

const items = [
  { id: 'transparency', title: 'Transparência', desc: 'Orçamento claro, comunicação direta e decisões documentadas.', icon: ShieldCheck },
  { id: 'efficiency', title: 'Eficiência', desc: 'Projetos focados em reduzir trabalho manual e custos.', icon: Clock },
  { id: 'quality', title: 'Qualidade', desc: 'Práticas de teste e revisão que aumentam confiança nas entregas.', icon: CheckCircle }
]

export default function Differentials() {
  return (
    <section id="differentials" className="py-16 bg-surface2">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Diferenciais" subtitle="O que diferencia nosso trabalho" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.div key={it.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className="p-6 rounded-md bg-neutral-900/40">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-black/30">
                <it.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h4 className="font-medium">{it.title}</h4>
                <p className="text-neutral-400 text-sm mt-2">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}
