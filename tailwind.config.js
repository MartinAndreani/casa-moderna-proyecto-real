/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  // purge: false,
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'scroll 85s linear infinite',
      },
      keyframes: {
        'scroll': {
          from: { transform: 'translateX(1.6%)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors:{
        "nav": "#242021",
        "cursomGreen": "#4F7D3F"
      },
      fontFamily: {
        "roboto": ['"Roboto Flex"', 'sans-serif']  
      },
      backgroundImage: {
        "service": "url('/images/servicios/services-end.png')",
        "home": "url('/home.png')",
      },
    },
  },
  plugins: ["flowbite/plugin"],
}