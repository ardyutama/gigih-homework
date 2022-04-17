const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'green-spotify' : '#1ED760',
        'grey-spotify' : '#555555',
        'black-spotify' : '#222222',
      },
      fontFamily : {
        'sans' : ['Circular Std','sans-serif']
      }
    },
  },
  plugins: [],
}
