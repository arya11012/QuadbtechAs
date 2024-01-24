/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    "./src/*.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      margin: {
        '30': '7.5vw',
        '40': '10vw',
        '50': '12.5vw',
        '60':'15vw',
        '70':'17.5vw',
        '60':'15vw',
        '70':'25vw'
        // Add more as needed
      },
      height:{
        '100':"40rem"
        
      },
      fontSize:{
        '40':"2rem",
        '50':"3rem"
      }

      
    },
  },
  plugins: [],
}