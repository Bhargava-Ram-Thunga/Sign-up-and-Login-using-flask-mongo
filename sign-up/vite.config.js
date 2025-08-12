import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  preview: {
    allowedHosts: [
      'sign-up-and-login-using-flask-mongo.onrender.com' // Render domain
    ],
    host: '0.0.0.0', // Required for Render to accept external requests
    port: process.env.PORT || 5173
  }
})
