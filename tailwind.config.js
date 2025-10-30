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
        },
        cobot: {
          accent: '#4ADE80', // green accent for Cobot page
          accent50: '#F0FDF4',
          accent200: '#BBF7D0',
          accent600: '#16A34A'
        },
        guada: {
          accent: '#E9DCCB', // beige accent for Guadaloop page (soft warm beige)
          accent50: '#F7F3EB',
          accent200: '#E2D3BF',
          accent600: '#C6B39A'
        },
        claw: {
          accent: '#F5B2C8', // light pink accent for Claw page
          accent50: '#FCE7EF',
          accent200: '#F7C9DA',
          accent600: '#E67AA1'
        },
        vector: {
          accent: '#8EC7D0', // sampled light teal/blue-green placeholder (adjust to swatch)
          accent50: '#E6F4F6',
          accent200: '#BFE2E7',
          accent600: '#5CAAB6'
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
