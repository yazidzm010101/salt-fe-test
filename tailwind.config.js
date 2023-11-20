/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
