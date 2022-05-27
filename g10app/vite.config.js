import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(), 
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], 
      strategies: "injectManifest", 
      srcDir: "src",
      filename: "serviceWorker.js",
      manifest: {
        name: 'FoodWA',
        short_name: 'FoodWA',
        description: 'Recetario con funcionalidad offline y PWA',
        display: "standalone",
        theme_color: '#ffffff',
        icons: [
          {
            src: "/public/android-chrome-192x192.png",
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: "/public/android-chrome-384x384.png",
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/public/foodwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/public/foodwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
