import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  html: {
    "-o-tab-size": 4,
    scrollBehavior: "smooth",
  },
  button: {
    cursor: "pointer",
  },
  h1: {
    fontSize: "xxx-large",
  },
  h2: {
    fontSize: "xx-large",
  },
  h3: {
    fontSize: "x-large",
  },
  h4: {
    fontSize: "large",
    fontStyle: "italic",
  },
});

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      _dark: "",
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          text: {
            value: {
              _dark: "{colors.neutral.100}",
              _light: "{colors.neutral.950}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
  globalCss,
});
