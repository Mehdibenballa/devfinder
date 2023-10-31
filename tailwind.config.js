/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center : true,
      default :'1rem',
      sm :'2rem',
      lg :'3rem',
      xl :'4rem',
    },
    extend: {
      colors: {
        blue:  '#0077ff',
        lightBlue: '#697c9b',
        darkBlue : '#4b699b',
        darkBlueDarker : '#1e2b48',
        veryDarkBlue : '#2a3341' ,
        veryDarkBlueDarker : '#141d2e',
        veryLightBlue : '#f5f7ff',
        white : '#ffffff'
      }
    },
  },
  plugins: [],
}

