// @ts-nocheck
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const brightnessUtilities = {
        ".brightness-0": {
          "-webkit-filter": "brightness(0)",
          filter: "brightness(0)",
        },
        ".brightness-50": {
          "-webkit-filter": "brightness(0.5)",
          filter: "brightness(0.5)",
        },
        ".brightness-75": {
          "-webkit-filter": "brightness(0.75)",
          filter: "brightness(0.75)",
        },
        ".brightness-110": {
          "-webkit-filter": "brightness(1.1)",
          filter: "brightness(1.1)",
        },
        ".brightness-125": {
          "-webkit-filter": "brightness(1.25)",
          filter: "brightness(1.25)",
        },
      };
      addUtilities(brightnessUtilities);
    }),
  ],
};
