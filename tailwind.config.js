/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.html", // Agrega esta línea
  ],
  safelist: [
    // Todas las clases brightness que uses
    "brightness-0",
    "brightness-50",
    "brightness-75",
    "brightness-90",
    "brightness-95",
    "brightness-100",
    "brightness-105",
    "brightness-110",
    "brightness-125",
    "brightness-150",
    "brightness-200",

    // Si usas hover u otras variantes
    "hover:brightness-75",
    "hover:brightness-110",

    // También incluye con prefijos responsive si los usas
    "sm:brightness-75",
    "md:brightness-110",
    "lg:brightness-125",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
