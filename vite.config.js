import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        findDoctor: resolve(__dirname, 'find-doctor.html'),
        findClinic: resolve(__dirname, 'find-clinic.html'),
      },
    },
  },
})
