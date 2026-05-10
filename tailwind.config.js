/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      boxShadow: {
        wave: '0 10px 30px rgba(8, 145, 178, 0.25)',
      },
      backgroundImage: {
        'ocean-gradient':
          'radial-gradient(circle at top right, rgba(34, 211, 238, 0.26), rgba(8, 47, 73, 0.94) 45%), linear-gradient(120deg, #022c43, #0c4a6e 45%, #164e63)',
      },
    },
  },
  plugins: [],
}

