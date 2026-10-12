import { defineConfig } from 'vite';

export default defineConfig({
  // Keep the legacy prototype files as static assets. Vite copies public/ into dist/ unchanged.
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
