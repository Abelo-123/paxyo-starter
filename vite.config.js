import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/paxyo-starter/', // Replace 'broke' with your repo name
  build: {
    outDir: 'dist', // Ensure the build output is to the 'dist' folder
  },
  plugins: [react()],
  resolve: {
    alias: {
      // Add alias for tgui-core
      'tgui-core': path.resolve(__dirname, 'node_modules/tgui-core'),
    },
  },
});