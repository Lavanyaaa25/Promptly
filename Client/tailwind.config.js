/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: 'rgba(244, 191, 85, 1)',
        'orange-light': 'rgba(244, 191, 85, 0.8)', 
        'purple':'rgba(201, 174, 243, 1)',
        'gray':'rgba(222, 213, 206, 1)',
        'yellow':'rgba(254, 245, 228, 1)',
        'pink':'rgba(243, 219, 233, 1)',
        'red':'rgba(250, 225, 221, 1)',
        'green':'rgba(182, 204, 192, 1)'
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif']
      }
    },

  },
  plugins: [],
};
