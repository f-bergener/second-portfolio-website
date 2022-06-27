/** @type {import('tailwindcss').Config} */
// https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#212B31',
        'middle-blue': '#7FC3C6',
      },
    },
  },
  plugins: [],
}
