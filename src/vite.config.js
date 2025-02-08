// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup'; // Import @svgr/rollup instead of vite-plugin-svgr

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgo: true,
      svgoConfig: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
        ],
      },
    }),
  ],
});
