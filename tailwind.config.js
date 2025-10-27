/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#6B8AFF',
        brand: {
          accent: '#F6D3BE', // peach/orange (approx from provided chip)
          accent50: '#FAE5D8',
          accent200: '#F3C7A8',
          accent600: '#E59F70'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem'
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
