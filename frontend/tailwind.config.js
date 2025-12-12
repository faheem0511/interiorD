// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'decorilla-blue': '#714d06e7',
        'decorilla-dark': '#1A1A1A',
        'decorilla-gray': '#4D4D4D',
        'decorilla-light': '#F8F8F8',
        'decorilla-accent': '#66310cda',
      },
    },
  },
  plugins: [],
};
