/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'dark-background': '#212121',
        button: '#4D59C6',
        disabled: '#BDBDBD',
        correct: '#35DA63',
        wrong: '#FF5656',
      },
      fontSize: {
        mobileH1: ['3rem', {
          fontWeight: '700',
        }],
        mobileH2: ['2.25rem', {
          fontWeight: '700',
        }],
        mobileH3: ['1.5rem', {
          fontWeight: '700',
        }],
        mobileParagraph: ['1.25rem', {
          fontWeight: '400',
        }],
        mobileRegular: ['1rem', {
          fontWeight: '400',
        }],
        mobileCardTitle: ['1.5rem', {
          fontWeight: '400',
        }],
        mobileCardSubtitle: ['0.875rem', {
          fontWeight: '400',
        }],
        h1: ['4rem', {
          fontWeight: '700',
        }],
        h2: ['3rem', {
          fontWeight: '700',
        }],
        h3: ['2.25rem', {
          fontWeight: '700',
        }],
        h4: ['1.5rem', {
          fontWeight: '400',
        }],
        p: ['1.25rem', {
          fontWeight: '400',
        }],
        desktopCardTitle: ['2.25rem', {
          fontWeight: '400',
        }],
        desktopCardSubtitle: ['1.5rem', {
          fontWeight: '400',
        }],
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'move-in-from-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'move-out-to-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'move-in-from-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'move-out-to-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'move-in-from-right': 'move-in-from-right 0.5s ease-out',
        'move-out-to-right': 'move-out-to-right 0.5s ease-out',
        'move-in-from-left': 'move-in-from-left 0.5s ease-out',
        'move-out-to-left': 'move-out-to-left 0.5s ease-out',
      }
    },
  },
  plugins: [],
}
