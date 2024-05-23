/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        quaternary: "rgba(var(--quaternary))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

