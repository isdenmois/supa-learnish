import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

/* global __dirname */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  resolve: {
    alias: {
      pages: resolve(__dirname, 'src/pages'),
    },
  },
})
