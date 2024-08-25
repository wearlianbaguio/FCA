/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      colors: {
        primary: "#f2f2f2",
        secondary: "#008542",
        btnblue: "#1573e5",
        btnyellow: "#daa625",
        fbHover: "#3b5897",
      },
    },
  },
  plugins: [],
}

