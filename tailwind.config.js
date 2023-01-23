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
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
