/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/**/*.html"],
  safelist: [
    "brightness-50",
    "brightness-75",
    "brightness-90",
    "brightness-110",
    "brightness-125",
    "brightness-150",
    {
      pattern: /brightness-(0|50|75|90|95|100|105|110|125|150|200)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
