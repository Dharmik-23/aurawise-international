/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          canvas: 'var(--bg-canvas)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          border: 'var(--border-subtle)',
          borderGold: 'var(--border-gold)',
          accent: 'var(--accent-gold)',
          accentHover: 'var(--accent-gold-hover)',
          text: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          textMuted: 'var(--text-muted)',
        },
        obsidian: {
          950: '#040609',
          900: '#080A0F',
          850: '#0D1118',
          800: '#121722',
          700: '#1A2130',
          600: '#252F42',
        },
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F3EFEA',
          300: '#EBE5DC',
          400: '#DFD7CA',
        },
        champagne: {
          50: '#FBF9F6',
          100: '#F4EEE5',
          200: '#E8DFD1',
          300: '#D8CBB6',
          400: '#C5B49B',
          500: '#B09C80',
        },
        gold: {
          300: '#E2CE9C',
          400: '#D6BC7C',
          500: '#C5A869',
          600: '#B38E46',
          700: '#9E7B35',
          800: '#755A20',
          900: '#4A3710',
        },
        charcoal: {
          900: '#12161E',
          800: '#1B202B',
          700: '#282F3D',
          600: '#3D4657',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Didot', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px var(--border-gold, rgba(197, 168, 105, 0.15))',
        'editorial-hover': '0 35px 70px -15px rgba(0, 0, 0, 0.85), 0 0 2px 1px var(--accent-gold, rgba(197, 168, 105, 0.45))',
        'gold-subtle': '0 0 30px -5px var(--accent-gold-glow, rgba(197, 168, 105, 0.25))',
        'dest-subtle': '0 0 35px -5px var(--dest-active-glow, rgba(201, 164, 92, 0.3))',
      },
      letterSpacing: {
        'widest-luxury': '0.3em',
        'ultra-wide': '0.4em',
        'monumental': '0.5em',
      },
    },
  },
  plugins: [],
}
