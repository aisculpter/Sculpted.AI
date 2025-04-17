/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        purple: {
          600: '#9333EA',
          900: '#4C1D95',
        }
      }
    },
  },
  plugins: [],
};