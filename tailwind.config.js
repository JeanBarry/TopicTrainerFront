/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        easy: '#6EE4CF',
        medium: '#7CE3FA',
        hard: '#FF9C9C',
        button: '#4D59C6',
        buttonHover: '#4D59C6BF',
        buttonActive: '#3b47b6',
        correct: '#35DA63',
        correctHover: '#35DA63BF',
        correctActive: '#2CC256',
        wrong: '#FF5656',
        wrongHover: '#FF5656BF',
        wrongActive: '#EE3F3F',
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
      }
    },
  },
  plugins: [],
}
