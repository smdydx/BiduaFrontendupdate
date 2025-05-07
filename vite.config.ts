import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      clientPort: 443, // Ensure HMR works correctly
    },
    allowedHosts: [
      "biduafrontendupdate.onrender.com", // Add this host
    ],
  },
  plugins: [react()],
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
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          // Split vendor libraries into a separate chunk
          vendor: ['react', 'react-dom', '@tanstack/react-query'],
          // Split other large libraries
          ui: ['@radix-ui/react-toast', '@radix-ui/react-dialog'],
        },
      },
    },
  },
});