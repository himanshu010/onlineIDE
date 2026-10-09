import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Express serves public/ statically and reads the manifest to put the entry's files in the page shell
// (src/utils/renderApp.js), so the build goes to public/build with base /build/.
export default defineConfig({
  root: import.meta.dirname,
  base: "/build/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  build: {
    outDir: path.resolve(import.meta.dirname, "../public/build"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: { input: path.resolve(import.meta.dirname, "src/main.tsx") },
  },
});
