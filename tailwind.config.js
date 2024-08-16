/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        teachers: ['"Teachers", "sans-serif"'],
      },
      colors: {
        primary: ["#2dd4bf"],
        secondary: ["#fde047"],
      },
    },
  },
  plugins: [],
};
