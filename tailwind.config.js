/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B1B1B',
        'light': '#2C2C2C',
        'high': '#F39C12',
        'font-dark': '#A6A6A6',
        'font': '#E0E0E0',
        'content': '#1F1F1F',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'lato': ['Lato']
      }
    }
  },
  plugins: [],
}


