import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/anthony-alarcon-castaneda/",
  build: {
    outDir: "docs", // 👈 genera en docs en vez de dist
  },
  plugins: [react(), tailwindcss()],
});
