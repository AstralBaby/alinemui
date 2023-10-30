// Delegar css de colores a MATERIALUI.
// Mapear colores desde tailwind
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          accent: "#1d4ed8"
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  // If a class is not found in any file specified in contents, will be removed, unless it is in the safelist.
  // Icons use the color palette at 400 and Chips use the color palette at 700.
 safelist: [
  {
    // Background for Badges and Chips
    pattern: /(bg)-(\w+)-(100|600)/
  },
  {
    // Icons for Lists and Buttons
    pattern: /fill-(\w+)-700/
  },
  {
    // TODO: Add state styles to all typography extended components: Danger, Success, Warning
    // Text color for Badges and Chips
    pattern: /text-(\w+)-600/
  },
 ]
}