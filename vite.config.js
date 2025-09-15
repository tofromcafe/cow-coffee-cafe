import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses (0.0.0.0)
    port: 4173, // Use the same port as preview
  },
  preview: {
    host: true, // Listen on all addresses for preview mode
    port: 4173,
    allowedHosts: ["cow-coffee-cafe.onrender.com"], // Allow Render domain
  },
})
