module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#00AEEF',
        primaryBg: '#080B12',
        surface: '#111722',
        surface2: '#171E2B',
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
        borderColor: '#263244',
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1f2937',
          900: '#0b1220'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        md: '10px'
      },
      boxShadow: {
        sm: '0 4px 12px rgba(2,6,23,0.5)',
        md: '0 10px 30px rgba(2,6,23,0.6)'
      },
      transitionDuration: {
        DEFAULT: '220ms'
      }
    }
  },
  plugins: []
}
