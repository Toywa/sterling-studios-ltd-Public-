/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sterlingBlue: "#6AAFE6",
        sterlingBlueDark: "#4A90D9",
        sterlingGold: "#E8C05A",
        sterlingGoldDark: "#D4A93A",
        sterlingNavy: "#0F1F35",
      },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"] }
    }
  },
  plugins: []
}
