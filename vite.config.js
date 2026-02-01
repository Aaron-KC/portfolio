import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // If the file path contains 'three', put it in the 3D vendor chunk
          if (
            id.includes("node_modules/three") ||
            id.includes("node_modules/@react-three")
          ) {
            return "three-vendor";
          }
          // Put GSAP in its own chunk
          if (id.includes("node_modules/gsap")) {
            return "gsap-vendor";
          }
          // Put other libraries in a general vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // This stops Vite from complaining about the huge 3D vendor file
    chunkSizeWarningLimit: 1200,
  },
});
