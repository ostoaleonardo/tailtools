/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "titan-white": "#FAFAFF",
        primary: {
          DEFAULT: "var(--color-primary, #915CE4)",
          foreground: "var(--color-primary-foreground, #FFFFFF)",
        }
      },
      animation: {
        "drop-line": "drop-line 7s 0s infinite"
      },
      keyframes: {
        "drop-line": {
          "0%": {
            top: "-50%"
          },
          "100%": {
            top: "150%"
          },
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

