import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["0507-49-47-219-254.ngrok-free.app"], // Add your ngrok domain here
  },
})
