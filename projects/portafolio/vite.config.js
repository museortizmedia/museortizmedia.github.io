import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Cambia 'dist' a 'build' (esto porque gh-paghes usa esta direccion para subir el deploy)
  },
})
