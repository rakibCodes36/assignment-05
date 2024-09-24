/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        midnight_black: "rgb(17,17,17)",
        midnight_black_op7: "rgba(17,17,17,0.7)",
        midnight_black_op1: "rgba(17,17,17,0.1)",
        Limeglow: "rgb(180, 244, 97)",
        IvoryCloud: "rgb(249, 247, 243)",
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
    },
    plugins: [],
  },
};
