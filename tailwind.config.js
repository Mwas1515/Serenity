/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#1F3A3D',
          dark: '#132628',
          light: '#2E5155',
        },
        gold: {
          DEFAULT: '#C9A668',
          light: '#E0C99A',
        },
        sage: {
          DEFAULT: '#8DA692',
          light: '#C3D2C6',
        },
        cream: '#F6F5F0',
        ink: '#1C2B2A',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
