/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          800: '#111827',
        },
        neon: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          lime: '#a3e635',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 28px -6px rgba(34, 211, 238, 0.45)',
        'glow-lg': '0 0 56px -8px rgba(139, 92, 246, 0.6)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
        'slide-up': 'slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 9s ease-in-out infinite',
        glow: 'glow 7s ease-in-out infinite',
        wave: 'wave 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
