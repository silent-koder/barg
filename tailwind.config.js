/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          light: "#1e3a8a",
          dark: "#0f172a",
        },
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to bottom right, #0f172a, #1e3a8a, #1e40af)",
      },
    },
  },
  plugins: [],
};
