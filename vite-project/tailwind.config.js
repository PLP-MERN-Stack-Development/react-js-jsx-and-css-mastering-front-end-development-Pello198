/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- must be 'class' for your toggle to work
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // ensure all your components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
