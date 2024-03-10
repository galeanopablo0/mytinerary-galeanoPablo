/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('/src/assets/hero-img.jpg')"
      })
    },
  },
  plugins: [],
}