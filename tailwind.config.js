// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        raleway: ['"Raleway"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#0563bb',
        'custom-dark-gray': '#45505b',
        'custom-light-gray': '#ddd',
        'custom-slate': '#728394',
      },
    },
  },
  plugins: [],
};
