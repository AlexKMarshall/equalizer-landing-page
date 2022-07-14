const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const stack = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      stack: (value) => ({
        display: "flex",
        flexDirection: "column",
        gap: value,
      }),
    },
    { values: { ...theme("spacing"), DEFAULT: "1em" } }
  );
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: { normal: 400, bold: 700 },
    fontSize: {
      "-2": "var(--step--2)",
      "-1": "var(--step--1)",
      0: "var(--step-0)",
      1: "var(--step-1)",
      2: "var(--step-2)",
      3: "var(--step-3)",
      4: "var(--step-4)",
      5: "var(--step-5)",
    },
    spacing: {
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      m: "var(--space-m)",
      l: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-2xl)",
      "3xs-2xs": "var(--space-3xs-2xs)",
      "2xs-xs": "var(--space-2xs-xs)",
      "xs-s": "var(--space-xs-s)",
      "s-m": "var(--space-s-m)",
      "m-l": "var(--space-m-l)",
      "l-xl": "var(--space-l-xl)",
      "xl-2xl": "var(--space-xl-2xl)",
      "2xl-3xl": "var(--space-2xl-3xl)",
      "s-l": "var(--space-s-l)",
    },
  },
  plugins: [stack],
};
