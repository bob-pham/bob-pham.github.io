/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        'animation': {
          'gradient-x':'gradient-x 5s ease infinite',
          'gradient-y':'gradient-y 5s ease infinite',
          'gradient-xy':'gradient-xy 15s ease infinite',
          },
          'keyframes': {
              'gradient-y': {
                  '0%, 100%': {
                      'background-size':'400% 400%',
                      'background-position': 'center top'
                  },
                  '50%': {
                      'background-size':'200% 200%',
                      'background-position': 'center center'
                  }
              },
              'gradient-x': {
                  '0%, 100%': {
                      'background-size':'200% 200%',
                      'background-position': 'left center'
                  },
                  '50%': {
                      'background-size':'200% 200%',
                      'background-position': 'right center'
                  }
              },
              'gradient-xy': {
                  '0%, 100%': {
                      'background-size':'400% 400%',
                      'background-position': 'left center'
                  },
                  '50%': {
                      'background-size':'200% 200%',
                      'background-position': 'right center'
                  }
              }
          },
          
          fontFamily: {
              'bebasneue': ['"Bebas Neue"', 'sans-serif'],
              'montserrat': ['Montserrat', 'sans-serif'],
              'serif': ['Times New Roman']
          }
          
      },
    },
    plugins: [require("daisyui")],
  }
  