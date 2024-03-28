/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "nav": "#242021",
        "cursomGreen": "#4F7D3F"
      },
      fontFamily: {
        "roboto": ['"Roboto Flex"', 'sans-serif']  
      },
      backgroundImage: {
        "service": "url('images/servicios/services-end.png')"
      }
    },
  },
  plugins: [],
}