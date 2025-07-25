/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.js',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
