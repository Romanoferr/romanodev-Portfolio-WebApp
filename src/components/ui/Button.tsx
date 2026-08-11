import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand'
  const variants: Record<string, string> = {
    primary: 'bg-brand text-white hover:opacity-95',
    secondary: 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300'
  }

  // Ensure button has explicit type to avoid accidental form submission
  const type = (props as any).type || 'button'
  return <button type={type} {...props} className={`${base} ${variants[variant]} ${className}`} />
}
