import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/ilhankarabicak_web_sayfasi_v2/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/ilhankarabicak_web_sayfasi_v2/' : '/'),
  },
});
