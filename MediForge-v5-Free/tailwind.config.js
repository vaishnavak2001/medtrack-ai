/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{jsx,tsx}'],
    theme: {
        extend: {
            animation: { 'gradient-x': 'gradient-x 2s ease infinite' },
            keyframes: { 'gradient-x': { '0%, 100%': { 'background-position': '0% 50%' }, 50%: { 'background-position': '100% 50%' } } }
    }
  },
plugins: []
};
