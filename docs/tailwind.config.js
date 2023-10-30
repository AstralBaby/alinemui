const config = {
  darkMode: "class",
  plugins: [require('@tailwindcss/typography')],
  content: [
    "./*.{js.,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "../tailwind.config.js"
  ],
}

module.exports = config