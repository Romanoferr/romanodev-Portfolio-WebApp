import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { personal } from '../data/personal'
import { m as motion } from '../utils/motion'

export default function About() {
  return (
    <section id="about" className="py-16 bg-surface2">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Sobre" subtitle="Quem sou e como trabalho" />
        <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 rounded-md bg-neutral-900/30 p-6">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="flex justify-center md:justify-start">
              <picture className="w-36 h-36 overflow-hidden rounded-full border border-borderColor bg-[#0c1320]">
                <source
                  type="image/avif"
                  srcSet="/images/me-320.avif 320w, /images/me-480.avif 480w, /images/me-640.avif 640w"
                  sizes="(max-width: 768px) 144px, 240px"
                />
                <source
                  type="image/webp"
                  srcSet="/images/me-320.webp 320w, /images/me-480.webp 480w, /images/me-640.webp 640w"
                  sizes="(max-width: 768px) 144px, 240px"
                />
                <img
                  src="/images/me-640.jpeg"
                  alt={`${personal.name} — portrait`}
                  className="w-full h-full object-cover grayscale contrast-105"
                  loading="lazy"
                  decoding="async"
                  width={144}
                  height={144}
                />
              </picture>
            </div>
            <div className="space-y-4">
              <p className="text-neutral-300">{personal.short}</p>
              <div className="text-sm text-neutral-400">
                <p><strong>{personal.name}</strong> — {personal.role}</p>
                <p className="mt-2">Atendo pequenas e médias empresas, profissionais autônomos, startups e negócios locais, com foco em soluções práticas e comunicação direta.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
