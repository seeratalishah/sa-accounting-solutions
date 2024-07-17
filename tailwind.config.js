/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include all files in the src directory
    "./public/index.html", // Optionally include this line if you have any Tailwind classes in your HTML file
  ],
  theme: {
    fontFamily: {
      headingFont: ["Plus Jakarta Sans", "sans-serif"],
      paraFont: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
        },
        lightText: {
          50: "#7a7a7a"
        },
        black: {
          50: "#283236",
          100: "#000000"
        }
      },
    },
  },
  plugins: [],
});
