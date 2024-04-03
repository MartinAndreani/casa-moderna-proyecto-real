/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  purge: false,
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

        "service": "url('images/servicios/services-end.png')",
        "emedue" : "url(src/assets/emedue.webp)",
        "seco" : "url(src/assets/seco.webp)" 
      },
    },
  },
  plugins: ["flowbite/plugin"],
}