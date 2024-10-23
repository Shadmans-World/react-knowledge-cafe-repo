/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray': 'rgba(17, 17, 17, 0.6)',
      },
    },
  },
  plugins: [],
}

