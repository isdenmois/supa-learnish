import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

/* global __dirname */

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // plugins: [visualizer({ filename: 'dist/stats.html', open: true })],
    },
  },
  plugins: [react()],
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  resolve: {
    alias: {
      pages: resolve(__dirname, 'src/pages'),
      entities: resolve(__dirname, 'src/entities'),
      shared: resolve(__dirname, 'src/shared'),
    },
  },
})
