/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#080D1A',
          dark: '#050912',
          card: '#0D1426',
          border: 'rgba(255, 255, 255, 0.08)'
        },
        ice: {
          DEFAULT: '#F8FAFC',
          surface: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)'
        },
        coral: {
          DEFAULT: '#FF4820',
          hover: '#E53E17'
        },
        accent: {
          lime: '#CCFF00',
          blue: '#3B82F6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
