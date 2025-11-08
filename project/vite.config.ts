import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ilhankarabicak-websayfasi/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser'],
          icons: ['lucide-react']
        }
      }
    },
    // Minification and compression
    minify: 'esbuild',
    // Source maps for production debugging
    sourcemap: false,
    // Asset optimization
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false
    }
  },
  // SEO and performance headers
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
});
