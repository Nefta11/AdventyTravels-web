import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public' // Añadir esta línea para especificar el directorio de archivos estáticos
});
