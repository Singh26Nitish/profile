/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#001a2c',
        'light': '#edf6f9',
        'navcol': '#00111c'
      },
      fontFamily: {
        'comom': ['Neuton']
      }
    }
  },
  plugins: [],
}


