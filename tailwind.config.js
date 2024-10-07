/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "olive-green": "#6A6F4C",
        "soft-cream": "#EDE1D2",
        "warm-wood": "#806044",
        "deep-mahogany": "#5D2510",
        "dark-cocoa": "#412F26",
      },
      backgroundColor: {
        body: "#CBB89D",
      },
      fontFamily: {
        sans: "Kameron , sans-serif",
      },
      screens: {
        xs: { max: "350px" },
        sm: { max: "375px" },
        md: { max: "450px" },
        lg: { max: "500px" },
        xl: { max: "600px" },
      },
    },
  },
  plugins: [],
};
