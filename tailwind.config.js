/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
   },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

    
    extend: {
      fontFamily: {
         gemunu:['Gemunu Libre', 'sans-serif'],
         open: ['Open Sans', 'sans-serif'],
      },
  
      colors: {
       'gega-red': '#8A0303',
       'gega-black': '#000',
       'gega-white': '#ffff',

      },
      
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },


      
    },

  },
  plugins: [],
};

