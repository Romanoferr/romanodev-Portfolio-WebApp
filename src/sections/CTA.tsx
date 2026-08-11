import React from 'react'
import Button from '../components/ui/Button'
import { m as motion } from '../utils/motion'

export default function CTA() {
  return (
    <section id="cta" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-md p-8 text-center border border-[rgba(255,255,255,0.02)]">
          <h3 className="text-2xl font-semibold">Pronto para resolver um problema real?</h3>
          <p className="mt-2 text-neutral-400">Peça um orçamento personalizado e receba um plano objetivo para seu projeto.</p>
          <div className="mt-4 flex items-center justify-center">
            <a href="#contact"><Button variant="primary">Solicitar orçamento</Button></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
