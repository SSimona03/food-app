/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**.{js,ts,jsx,tsx}"],
theme: {
    extend: {
      fontFamily:{
        montserrat: ['var(--font-montserrat)']
    },
    fontSize: {
      xs: "0.65rem;"
      },
      height: {
        vh80 : '80vh',
        vh25: "25vh"
      },
      padding:{
        px6: "6px"
      },
      width: {
        '416': '26rem'
      },
     
        screens: {
          'md': '720px',
        },
        maxHeight: {
          'vh80': '80vh',
          'vh65': '65vh',
          'vh60': '60vh',
          
        }
  },
  plugins: [],
  
}
  
}
