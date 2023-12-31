/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          'primary': {
            DEFAULT: '#0077b5',
            // 'dark' : "#000D8A",
            // 'medium': "#",
            'light': "#e4ddfd"
            // more shades here /*  '900' : '#hexCode'
          },
          'secondary': {
            DEFAULT: '#FFA200',
            // more shades here /*  '900' : '#hexCode'
          },
          'black':{
            // DEFAULT: '#2f1c6a'
            DEFAULT: "#1f193c"
          },
  
          //color defined for dark theme
          'darkPrimary':{
            DEFAULT: "#1e1e1e"
          },
          'darkSecondary':{
            DEFAULT: '#252526'
          },
          'darkTertiary':{
            DEFAULT: '#313237'
          }
         
  
        },
  
        // fontFamily: {
        //   'poppins': ['Poppins-Regular', 'sans-serif'],
        // },

      },
    },
    plugins: [],
  };
  