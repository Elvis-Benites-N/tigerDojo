import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/tigerDojo/',
  plugins: [react()],
  server: {
    port: 4200
  }
  
})
