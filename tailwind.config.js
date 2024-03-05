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
        'secondary': 'Orbitron, sans-serif'
      },
      height: {
        18: '4.5rem',

      },
      animation: {
        shimmer: "shimmer 2s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    }
  },
  plugins: [],
}
