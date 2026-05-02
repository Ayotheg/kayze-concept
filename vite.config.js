import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // ❌ REMOVE manualChunks completely

        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },

    minify: "esbuild",
    sourcemap: false,
    assetsInlineLimit: 4096,
  },

  publicDir: "public",

  server: {
    port: 5173,
    open: true,
  },
});