/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html','./src/**/*.{ts,tsx}'],
    theme: {
      extend: {
        colors: {
          brand1: '#06b6d4', // cyan
          brand2: '#7c3aed', // purple
          darkbg: '#0f172a'
        }
      }
    },
    plugins: []
  }
  