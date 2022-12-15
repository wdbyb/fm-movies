/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#FC4747',
        semiDarkBlue: '#161D2F',
        darkBlue: '#10141E',
        greyishBlue: '#5A698F',
      },
      width: {
        'trending-sm': '15rem',
        'trending-lg': '30rem',
      },
    },
  },
  plugins: [],
};
