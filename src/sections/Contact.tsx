import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { Mail, Smartphone, Github, Linkedin } from 'lucide-react'
import { m as motion } from '../utils/motion'
import { contact } from '../data/contact'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-primaryBg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Contato" subtitle="Como solicitar um orçamento" />
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-md bg-neutral-900/30 p-6">
            <h4 className="font-semibold">Como eu trabalho</h4>
            <p className="text-neutral-400 text-sm mt-2">Descreva seu desafio por e-mail ou WhatsApp. Vou responder com perguntas-chave e uma proposta objetiva.</p>
            <p className="text-neutral-400 text-sm mt-3">Inclua: objetivo, principais dores e prazo aproximado.</p>
          </div>
          <div className="rounded-md bg-neutral-900/40 p-6 flex flex-col gap-3">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 text-neutral-200"><Mail className="w-5 h-5 text-brand" /> {contact.email}</a>
            <div className="inline-flex items-center gap-3 text-neutral-200"><Smartphone className="w-5 h-5 text-brand" /> {contact.whatsapp}</div>
            <div className="flex items-center gap-3 mt-2 text-neutral-400">
              {contact.github && (<a href={contact.github} className="inline-flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a>)}
              {contact.linkedin && (<a href={contact.linkedin} className="inline-flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
