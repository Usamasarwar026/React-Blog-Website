/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Design system colors
        "bg-primary": "hsl(0, 0%, 100%)",
        "bg-secondary": "hsl(0, 0%, 97%)",
        "action-primary": "hsl(214, 32%, 91%)",
        "action-secondary": "hsl(210, 38%, 95%)",
        "fg-primary": "hsl(218, 23%, 23%)",
        "fg-secondary": "hsl(216, 15%, 52%)",
        "fg-tertiary": "hsl(214, 20%, 69%)",
        "accent": "hsl(229, 76%, 66%)",

        // Dark mode overrides
        "dark-bg-primary": "hsl(218, 23%, 15%)",
        "dark-bg-secondary": "hsl(218, 23%, 11%)",
        "dark-bg-overlay": "hsl(218, 23%, 23%)",
        "dark-action-primary": "hsl(218, 23%, 25%)",
        "dark-action-secondary": "hsl(218, 23%, 20%)",
        "dark-fg-primary": "hsl(0, 0%, 100%)",
        "dark-fg-secondary": "hsl(214, 20%, 80%)",
        "dark-fg-tertiary": "hsl(214, 20%, 60%)",
      },
      fontSize: {
        "fs-base": "0.85rem",
        "fs-1": "1.875rem",
        "fs-2": "1.5rem",
        "fs-3": "1.25rem",
        "fs-4": "0.875rem",
        "fs-5": "0.75rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
