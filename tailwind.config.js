/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        btnBlue: {
          50: '#7e4dbf',
        },
      },
      dropShadow: {
        'team': '0 10px 10px rgba(30, 227, 255,0.5)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}