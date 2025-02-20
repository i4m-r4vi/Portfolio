/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': { max: '400px' }, // Target screens <= 400px
        'max-sm': { max: '640px' }, // Target screens <= 640px
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

