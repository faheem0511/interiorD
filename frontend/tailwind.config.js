// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Decorilla's exact color palette
        'decorilla-blue': '#714d06e7',  // Primary blue
        'decorilla-dark': '#1A1A1A',   // Dark text
        'decorilla-gray': '#4D4D4D',   // Secondary text
        'decorilla-light': '#F8F8F8',  // Light background
        'decorilla-accent': '#66310cda', // Orange accent
      },
    },
  },
  plugins: [],
};
