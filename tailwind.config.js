/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {

      fontFamily: {
        jamjuree: ['Bai Jamjuree', 'serif'],

      },

      colors: {
        'primary': "hsl(171, 66%, 44%)",
        "secondary": "hsl(233, 100%, 69%)",
        "dgrayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
        "footer-bg":"#f5f6f8",
      },

      backgroundImage: {
        'desk': "url('../images/bg-header-desktop.png')",
        'mblb' : "url('../images/bg-header-mobile.png')",
      },

      screens: {
        'max-sm': { max: '640px' }, 
      },

      boxShadow: {
        'customfir': 'hsla(171, 66%, 44%, 0.6) 0px 2px 8px 0px',
        'customsec':  'hsla(233, 100%, 69%, 0.6) 0px 2px 8px 0px',
      },

      

    },
  },
  plugins: [],
}