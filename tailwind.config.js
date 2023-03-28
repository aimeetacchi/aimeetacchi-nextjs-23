/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         // add the css variable and include fallback fonts from tailwind default theme
         oswald700sans: ['var(--font-oswald700sans)', ...fontFamily.sans],
         oswald500sans: ['var(--font-oswald500sans)', ...fontFamily.sans],
         opensans400sans: ['var(--font-opensans400sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}