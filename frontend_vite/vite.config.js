import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
          '/socket.io': {
              target: 'http://localhost:3001', // Adresse du backend
              ws: true,
          },
      },
  },
})
