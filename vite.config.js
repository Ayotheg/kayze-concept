import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    // Slightly raise warning threshold for larger chunks
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting (Rolldown-compatible)
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("/react/") ||
              id.includes("react-dom")
            ) {
              return "react";
            }

            if (id.includes("framer-motion")) {
              return "framerMotion";
            }

            if (id.includes("lucide-react")) {
              return "lucide";
            }

            return "vendor";
          }
        },

        // Cache-friendly hashed filenames
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },

    // Fast minification
    minify: "esbuild",

    // No production sourcemaps
    sourcemap: false,

    // Inline very small assets
    assetsInlineLimit: 4096,
  },

  // Public assets folder
  publicDir: "public",

  server: {
    port: 5173,
    open: true,
  },
});