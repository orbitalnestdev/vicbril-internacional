/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: '#0e4c5e',
          900: '#003B4D',
          950: '#00222e',
        }
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}
