import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    nodePolyfills(),
    react()
  ],
  build: {
    outDir: 'docs'
  },
  // @ts-ignore
  base: process.env.GH_PAGES ? '/demo-dapp-with-wallet/' : './',
  server: {
    fs: {
      allow: ['../sdk', './'],
    },
  },
})
