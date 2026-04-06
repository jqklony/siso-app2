import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    // Separar chunks para mejor cacheado en Cloudflare Pages
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Alerta si un chunk supera 500kb
    chunkSizeWarningLimit: 500,
  },
  // Solo variables con prefijo VITE_ se exponen al cliente
  envPrefix: "VITE_",
});
