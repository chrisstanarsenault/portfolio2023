const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'layout': '1400px',
        '1/2': '50%',
      },
      width: {
        'layout': '1400px',
      },
      screens: {
        'xs': '420px',
        'layout': '1400px',
      },
      padding: {
        'full': '100%',
      },
    },
  },
  plugins: [],
}
