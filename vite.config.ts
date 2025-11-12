import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// Hacemos la base configurable vía la variable de entorno VITE_BASE.
// - Para GitHub Pages: VITE_BASE='/tasktrack-mate/' (o dejar por defecto si ya está así).
// - Para Vercel/Netlify: VITE_BASE='/'
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // base configurable: toma VITE_BASE si está definida, si no usa '/tasktrack-mate/' por compatibilidad
  base: process.env.VITE_BASE || "/tasktrack-mate/",
}));
