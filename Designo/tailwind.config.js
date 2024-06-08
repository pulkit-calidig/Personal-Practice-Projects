/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "rgb(231, 129, 107)",
      },
    },
  },
  plugins: [],
}
