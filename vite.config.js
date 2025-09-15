import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['*'], // allow anything
  },
  preview: {
    host: true,
    allowedHosts: ['*'], // force it for preview too
  },
})
