const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'green-spotify' : '#1ED760'
      },
      fontFamily : {
        'sans' : ['Circular Std','sans-serif']
      }
    },
  },
  plugins: [],
}
