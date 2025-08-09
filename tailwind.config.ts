import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff38b0',
          purple: '#7c3aed',
          blue: '#0ea5e9',
          cyan: '#22d3ee',
        },
      },
      backgroundImage: {
        'neon-radial': 'radial-gradient(800px 400px at 10% 10%, rgba(124,58,237,0.12), transparent 10%), radial-gradient(600px 300px at 90% 90%, rgba(14,165,233,0.06), transparent 12%), linear-gradient(180deg,#050014 0%, #070518 100%)'
      },
      keyframes: {
        float: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' }, '100%': { transform: 'translateY(0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      }
    }
  },
  plugins: [],
}

export default config