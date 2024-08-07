/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})*/
/*
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
*/

import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { PORT = 3000 } = process.env;

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../server/dist/app', // Output directory for the build
    rollupOptions: {
      input: './src/main.jsx', // Input path for rollup
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].[ext]",
        entryFileNames: "assets/[name].js",
      }
    },
  },
});