/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#fdf0d5",
        "red": "#c1131f",
        "darkred": "#780000",
        "blue": "#669bbc",
        "darkblue": "#003049",
      },
      fontFamily: {
        "display": "DM Serif Display, serif",
        "inner": "EB Garamond, serif",
      }
    },
  },
  plugins: [],
};
