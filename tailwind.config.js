/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'titan-white': '#FAFAFF',
        'titan-black': '#131315',
        primary: {
          DEFAULT: 'var(--color-primary, #915CE4)',
          foreground: 'var(--color-primary-foreground, #FFFFFF)',
        }
      },
      animation: {
        'drop-line': 'drop-line 7s 0s infinite',
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(2) infinite 2s',
      },
      keyframes: {
        'drop-line': {
          '0%': {
            top: '-50%'
          },
          '100%': {
            top: '150%'
          },
        },
        typewriter: {
          to: {
            left: '100%'
          }
        },
        blink: {
          '0%': {
            height: '0%',
          },
          '100%': {
            height: 'auto',
          },
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}

