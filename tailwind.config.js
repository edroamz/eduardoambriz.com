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
      screens: {
        laptop: '960px'
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono]
      },
      fontSize: {
        10: [
          '10px',
          {
            letterSpacing: '-0.01em',
            lineHeight: '14px'
          }
        ],
        12: [
          '12px',
          {
            letterSpacing: '0',
            lineHeight: '17px'
          }
        ],
        13: [
          '13px',
          {
            letterSpacing: '-0.0025em',
            lineHeight: '18px'
          }
        ],
        14: [
          '14px',
          {
            letterSpacing: '-0.006em',
            lineHeight: '20px'
          }
        ],
        16: [
          '16px',
          {
            letterSpacing: '-0.011em',
            lineHeight: '24px'
          }
        ],
        18: [
          '18px',
          {
            letterSpacing: '-0.014em',
            lineHeight: '28px'
          }
        ],
        20: [
          '20px',
          {
            letterSpacing: '-0.017em',
            lineHeight: '32px'
          }
        ],
        24: [
          '24px',
          {
            letterSpacing: '-0.019em',
            lineHeight: '34px'
          }
        ],
        32: [
          '32px',
          {
            letterSpacing: '-0.021em',
            lineHeight: '46px'
          }
        ],
        40: [
          '40px',
          {
            letterSpacing: '-0.022em',
            lineHeight: '54px'
          }
        ],
        48: [
          '48px',
          {
            letterSpacing: '-0.022em',
            lineHeight: '60px'
          }
        ],
        64: [
          '64px',
          {
            letterSpacing: '-0.022em',
            lineHeight: '72px'
          }
        ]
      },
      spacing: {
        header: '56px'
      },
      minHeight: {
        main: 'calc(100vh - theme(spacing.header))'
      },
      colors: {
        background: '#fff',
        foreground: '#000',
        accents: {
          1: '#111',
          2: '#333',
          3: '#444',
          4: '#666',
          5: '#888',
          6: '#999',
          7: '#eaeaea',
          8: '#fafafa'
        },
        primary: {
          lighter: '#d3e5ff',
          light: '#3291ff',
          DEFAULT: '#0070f3',
          dark: '#0761d1'
        },
        highlight: '#79ffe1'
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0,0,0,.12)',
        md: '0 8px 30px rgba(0,0,0,.12)',
        lg: '0 30px 60px rgba(0,0,0,.12)'
      },
      content: {
        'subheading-anchor':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' aria-hidden='true'%3E%3Cpath d='M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-animate')]
};
