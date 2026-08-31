import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { m as motion } from '../utils/motion'
import ProjectIllustration from '../components/ui/ProjectIllustration'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-primaryBg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Projetos"/>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p) => (
          <motion.article
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="rounded-md bg-surface p-8"
          >
            <a href={p.url} className="block h-full">
              <div className="min-h-48 bg-black/10 rounded-md flex flex-col justify-center items-center p-6 gap-5 text-center">
                <ProjectIllustration variant={p.variant} className="w-20 h-20 flex-none" />
                <div className="w-full">
                  <h5 className="text-xl font-semibold">{p.title}</h5>
                  <p className="text-textSecondary text-base mt-2 leading-relaxed">{p.description}</p>
                  <p className="text-neutral-500 text-sm mt-3">{p.meta}</p>
                </div>
              </div>
            </a>
          </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
