/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ripple}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 45px -24px rgb(15 23 42 / 0.35)"
      },
      colors: {
        ink: {
          950: "#0b1320"
        }
      }
    }
  },
  plugins: []
};
