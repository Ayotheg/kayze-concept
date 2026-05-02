import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    // Raise chunk warning threshold slightly
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor libs from app code for better caching
        manualChunks: {
          react:        ["react", "react-dom"],
          framerMotion: ["framer-motion"],
          lucide:       ["lucide-react"],
        },
        // Hashed filenames → long-term browser caching
        entryFileNames:  "assets/[name].[hash].js",
        chunkFileNames:  "assets/[name].[hash].js",
        assetFileNames:  "assets/[name].[hash][extname]",
      },
    },

    // Minify with esbuild (default, fast)
    minify: "esbuild",

    // Generate source maps only in development
    sourcemap: false,

    // Compress assets
    assetsInlineLimit: 4096, // inline files < 4kb as base64
  },

  // Ensure public folder assets (robots.txt, sitemap.xml, og-image) are served
  publicDir: "public",

  server: {
    port: 5173,
    open: true,
  },
});