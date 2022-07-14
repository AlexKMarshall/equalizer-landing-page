const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: { normal: 400, bold: 700 },
  },
  plugins: [],
};
