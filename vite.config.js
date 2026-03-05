import { defineConfig } from 'vite'

export default defineConfig({
  base: '/fleuriste-lautre/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
