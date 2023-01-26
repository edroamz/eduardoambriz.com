const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cal-sans)', ...fontFamily.sans],
        sans: ['var(--font-inter-sans)', ...fontFamily.sans]
      },
      spacing: {
        header: '64px'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      colors: {
        primary: '#0070F3',
        'primary-dark': '#3291FF'
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0,0,0,.12)',
        md: '0 8px 30px rgba(0,0,0,.12)',
        lg: '0 30px 60px rgba(0,0,0,.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
