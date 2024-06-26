/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Clash Display', 'sans-serif'],
      },
      fontWeight: {
        'normal': 500,
        '!normal' : 700, // Adjust the value based on the font's weight scale
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinner: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotater: "spinner 10s linear infinite",
        wiggle: "wiggle 10s linear infinite",
      },
    },
  },
  plugins: [],
}

