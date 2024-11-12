/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["extension./*.html" , "./dist/*.html"],
  theme: {
    extend: {
      colors:{
        customDark:"#1E1E1E"
      },
      fontFamily: {
        itim: ['Itim', 'cursive'], 
      },
    },
  },
  plugins: [],
}

