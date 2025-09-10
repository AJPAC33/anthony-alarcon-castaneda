/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "filter",
    "brightness-[0.4]",
    "brightness-[0.5]",
    "brightness-[0.6]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
