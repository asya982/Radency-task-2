/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#bb4430",
        secondary: " #7ebdc2",
        dark: "#231f20",
      },
      fontFamily: {
        mono: ["Courier Prime", "monospace"],
        cursive: ["Poiret One", "cursive"],
      }
    },
  },
  plugins: [],
};
