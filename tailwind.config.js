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
        "botones": "#4F7D3F",
      }
    },
  },
  plugins: [],
}