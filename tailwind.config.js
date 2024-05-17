/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#23273b',
        primaryLight: '#cad2fa',
        secondary: '#ff8626',
        stale: '#f8f8f8',
      }
    },
  },
  plugins: [],
}

