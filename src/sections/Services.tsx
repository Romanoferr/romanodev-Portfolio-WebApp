import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { services } from '../data/services'
import { Briefcase, Code, Cpu, CheckSquare } from 'lucide-react'
import { m as motion } from '../utils/motion'

const iconMap: Record<string, any> = {
  'web-dev': Code,
  'web-systems': Cpu,
  'automation': Briefcase,
  'qa': CheckSquare
}

export default function Services() {
  return (
    <section id="services" className="py-16 bg-primaryBg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Serviços" subtitle="O que eu faço - claro e direto." />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => {
          const Icon = iconMap[s.id] || Briefcase
          return (
            <motion.article key={s.id} whileHover={{ y: -6 }} className="rounded-md bg-surface p-6 border border-borderColor hover:border-brand transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-[rgba(255,255,255,0.02)]">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-textPrimary">{s.title}</h3>
                  <p className="mt-2 text-textSecondary text-sm">{s.description}</p>
                  <p className="mt-3 text-sm"><a href="#contact" className="text-brand hover:underline">Solicitar orçamento</a></p>
                </div>
              </div>
            </motion.article>
          )
        })}
        </div>
      </div>
    </section>
  )
}
