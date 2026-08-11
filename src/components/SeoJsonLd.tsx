import React from 'react'
import { personal } from '../data/personal'
import { contact } from '../data/contact'
import { services } from '../data/services'

function domainFromEmail(email?: string) {
  if (!email) return undefined
  const parts = email.split('@')
  if (parts.length !== 2) return undefined
  return `https://${parts[1]}`
}

export default function SeoJsonLd() {
  const siteUrl = domainFromEmail(contact.email) || domainFromEmail(personal.email) || undefined

  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: personal.name || contact.name || 'Prestador de serviços de tecnologia',
    description: personal.short || 'Serviços de desenvolvimento web, sistemas personalizados e automações.',
  }

  if (siteUrl) jsonLd.url = siteUrl
  if (contact.whatsapp) jsonLd.telephone = contact.whatsapp
  if (contact.email) jsonLd.email = contact.email

  // Add services as offers
  if (Array.isArray(services) && services.length) {
    jsonLd.makesOffer = services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
      },
    }))
  }

  const sameAs = [contact.linkedin, contact.github].filter(Boolean)
  if (sameAs.length) jsonLd.sameAs = sameAs

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  )
}
