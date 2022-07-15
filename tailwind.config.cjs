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

const cluster = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      cluster: (value) => ({
        display: "flex",
        flexWrap: "wrap",
        gap: value,
      }),
    },
    { values: { ...theme("spacing"), DEFAULT: "1em" } }
  );
});

const sidebar = plugin(
  ({ matchUtilities, theme }) => {
    const sidebar = {
      flexGrow: 1,
    };
    const content = (value) => ({
      flexBasis: 0,
      flexGrow: 999,
      minInlineSize: value,
    });

    matchUtilities(
      {
        "with-sidebar": (value) => ({
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--sidebar-space-y, 1em) var(--sidebar-space-x, 1em)",

          "&:not([data-sidebar-side='right']) > :first-child": sidebar,
          "&:not([data-sidebar-side='right']) > :last-child": content(value),

          "&[data-sidebar-side='right'] > :first-child": content(value),
          "&[data-sidebar-side='right'] > :last-child": sidebar,
        }),
      },
      { values: { ...theme("sidebarContentMinWidth"), DEFAULT: "50%" } }
    );
    matchUtilities(
      {
        "sidebar-space": (value) => ({
          "--sidebar-space-x": value,
          "--sidebar-space-y": value,
        }),
        "sidebar-space-x": (value) => ({
          "--sidebar-space-x": value,
        }),
        "sidebar-space-y": (value) => ({
          "--sidebar-space-y": value,
        }),
      },
      { values: { ...theme("spacing"), DEFAULT: "1em" } }
    );
  },
  {
    theme: {
      sidebarContentMinWidth: {
        m: "30%",
      },
    },
  }
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      white: "hsl(20deg 33% 98%)",
      black: "hsl(244deg 23% 12%)",
      cyan: "hsl(177deg 68% 64%)",
      orange: "hsl(12deg 94% 65%)",
      yellow: "hsl(33deg 100% 70%)",
    },
    fontFamily: {
      sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: { normal: 400, bold: 700 },
    fontSize: {
      xs: "var(--step--2)",
      s: "var(--step--1)",
      base: "var(--step-0)",
      lg: "var(--step-1)",
      xl: "var(--step-2)",
      "2xl": "var(--step-3)",
      "3xl": "var(--step-4)",
      "4xl": "var(--step-5)",
    },
    spacing: {
      0: 0,
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      m: "var(--space-m)",
      lg: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-3xl)",
      "3xs-2xs": "var(--space-3xs-2xs)",
      "2xs-xs": "var(--space-2xs-xs)",
      "xs-s": "var(--space-xs-s)",
      "s-m": "var(--space-s-m)",
      "m-l": "var(--space-m-l)",
      "l-xl": "var(--space-l-xl)",
      "xl-2xl": "var(--space-xl-2xl)",
      "2xl-3xl": "var(--space-2xl-3xl)",
      "s-l": "var(--space-s-l)",
      "l-3xl": "var(--space-l-3xl)",
    },
  },
  plugins: [stack, cluster, sidebar],
};
