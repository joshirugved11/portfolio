/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',     // cool cyan
        accent: '#a855f7',      // purple
        background: '#0f172a',  // dark navy
      },
    },
  },
  plugins: [],
}
