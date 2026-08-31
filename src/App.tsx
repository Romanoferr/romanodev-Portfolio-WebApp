import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Differentials from './sections/Differentials'
import Projects from './sections/Projects'
import Process from './sections/Process'
import About from './sections/About'
import CTA from './sections/CTA'
import Contact from './sections/Contact'
import SeoJsonLd from './components/SeoJsonLd'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen site-grid text-textPrimary font-sans">
      <SeoJsonLd />
      <Header />
      <main className="w-full">
        <Hero />
        <Services />
        <Differentials />
        <Projects />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
