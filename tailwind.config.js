/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepTeal: '#0E4D78',
        navyBlue: '#00497A',
        vibrantOrange: '#F3AC5B',
        vibrantOrangeHover: '#F1A757',
        lightBlue: '#8BCBEB',
        darkCharcoal: '#201F1F',
        subduedGray: '#685D5D'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        stinger: ['"Stinger Fit"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
