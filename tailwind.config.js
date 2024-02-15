/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        heroGradient: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],

      },
        animation:{
            "scroll" : "scroll 10s linear infinite",
        },
        keyframes: {
          scroll: {
            to: {transform: "translateX(calc(-50% - 0.25rem))"}
          }
        }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
