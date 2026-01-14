import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // Configuração para PWA - service worker e assets estáticos
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

