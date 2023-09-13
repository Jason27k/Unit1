/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#669bbc",
        "darker-blue": "#003049",
        "light": "#fdf0d5",
        "light-red": "#c1121f",
        "dark-red": "#780000",
      },
    },
  },
  plugins: [],
}