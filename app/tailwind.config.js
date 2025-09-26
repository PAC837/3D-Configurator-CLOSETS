/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0ea5e9",
          accent: "#22c55e",
        },
      },
    },
  },
  plugins: [],
};
