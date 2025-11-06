/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          light: "#1e3a8a",
          dark: "#0f172a",
          primary: "#2563eb",
          aboutPrimary: "#005A9C",
          aboutSecondary: "#FDB813",
          "background-light": "#F8FAFC",
          "background-dark": "#0f172a",
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
