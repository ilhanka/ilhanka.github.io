/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6e9f5',
          100: '#ccd3eb',
          200: '#99a7d7',
          300: '#667bc3',
          400: '#334faf',
          500: '#00239b', // Ana lacivert
          600: '#001c7c',
          700: '#00155d',
          800: '#000e3e',
          900: '#00071f',
        },
        medical: {
          blue: '#00239b',
          'blue-light': '#334faf',
          'blue-dark': '#001c7c',
          silver: '#f8f9fa',
          white: '#ffffff',
        }
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        blob: 'blob 7s infinite',
      },
    },
  },
  plugins: [],
};
