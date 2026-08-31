import React from 'react'
import { contact } from '../../data/contact'
import { m as motion } from '../../utils/motion'

// Converte "+55 21 99677-9544" em "5521996779544" para o link wa.me
function whatsappNumber(raw: string): string {
  return raw.replace(/[^\d]/g, '')
}

export default function FloatingWhatsApp() {
  const number = whatsappNumber(contact.whatsapp)
  const message = encodeURIComponent('Olá, Romano! Vim pelo seu site e gostaria de conversar.')
  const href = `https://wa.me/${number}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.464 1.712 6.408L3.2 28.8l6.56-1.68a12.74 12.74 0 0 0 6.244 1.6h.005c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.72-12.805-12.72zm0 23.36h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-3.892.996 1.04-3.79-.253-.392a10.55 10.55 0 0 1-1.62-5.664c0-5.864 4.774-10.64 10.64-10.64 2.84 0 5.51 1.106 7.517 3.113a10.56 10.56 0 0 1 3.112 7.52c-.002 5.864-4.774 10.568-10.656 10.568zm5.84-7.956c-.32-.16-1.892-.933-2.184-1.04-.292-.106-.504-.16-.717.16-.213.32-.824 1.04-1.01 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.592-1.894-1.779-2.214-.187-.32-.02-.494.14-.653.144-.144.32-.374.48-.56.16-.187.213-.32.32-.534.106-.213.053-.4-.027-.56-.08-.16-.717-1.73-.983-2.37-.259-.622-.522-.538-.717-.548h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.574 1.146 3.094 1.306 3.307.16.213 2.256 3.445 5.466 4.83.765.33 1.361.526 1.826.674.768.244 1.466.209 2.018.127.616-.092 1.893-.773 2.16-1.52.267-.746.267-1.386.186-1.52-.08-.134-.293-.214-.613-.374z" />
      </svg>
    </motion.a>
  )
}