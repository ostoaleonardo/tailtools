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
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

