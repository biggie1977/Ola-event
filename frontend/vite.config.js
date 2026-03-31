import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': process.env.NODE_ENV === 'production' ? 'https://ola-event.vercel.app' : 'http://localhost:5000'
    }
  }
});
