/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./pages/**/*.html",
        "./js/**/*.js",
    ],
    theme: {
        extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    },
    plugins: [],
}
