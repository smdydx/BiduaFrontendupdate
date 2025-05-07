
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  assetsInclude: ['**/*.jpeg'],
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      clientPort: 443,
      host: true
    },
    allowedHosts: ["a9705172-2ffd-4245-9b58-2f7cb303fe57-00-324kpszqylnwp.sisko.replit.dev"]
  },
  plugins: [react(), runtimeErrorOverlay()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "src"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
