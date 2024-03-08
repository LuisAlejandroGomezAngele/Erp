/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}

