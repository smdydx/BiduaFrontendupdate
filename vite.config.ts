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
      clientPort: 443
    },
    allowedHosts: [
      "47eead9e-92ae-4211-9bb2-9311d03d1738-00-124wsa9was5me.sisko.replit.dev",
      "biduafrontendupdate.onrender.com"
    ]
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
    rollupOptions: {
      external: ['class-variance-authority'],
      output: {
        manualChunks: {
          // Split vendor libraries into a separate chunk
          vendor: ['react', 'react-dom', '@tanstack/react-query'],
          // Split other large libraries
          ui: ['@radix-ui/react-toast', '@radix-ui/react-dialog'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000 kB
  },
});