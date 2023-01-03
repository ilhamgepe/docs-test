/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '500px' },
      'sm': { 'min': '800px' },
      'md': { 'min': '1000px' },
      'lg': { 'min': '1200px' },
      'xl': { 'min': '1400px' },
    },
    extend: {},
  },
  plugins: [],
}
