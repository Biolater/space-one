/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#191919'
      },
      fontFamily: {
        'primary': 'Montserrat, sans-serif',
        'secondary': 'Abril Fatface, sans-serif'
      }
    },
  },
  plugins: [],
}