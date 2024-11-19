import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    port: 8080
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        vr: resolve(__dirname, "vr/vrgame.html"),
        blender: resolve(__dirname, "blender/blender.html"),
        blbs: resolve(__dirname, "blbs/benign-lootbox-statements.html"),
        pibe: resolve(__dirname, "pibe/play-it-by-ear.html"),
        freelance: resolve(__dirname, "freelance/freelance.html"),
        walkingwifi: resolve(__dirname, "walking-wifi/walking-wifi.html"),
        degreeshow: resolve(__dirname, "degree-show/degree-show.html"),
        coding: resolve(__dirname, 'coding/coding.html'),
        grog: resolve(__dirname, 'grog/subscribe-to-grog.html')
      },
    },
  },
});
