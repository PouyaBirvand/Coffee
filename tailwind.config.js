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
        "translucent-coffee": "#835A36"
      },
      backgroundColor: {
        body: "#CBB89D",
      }, 
      fontFamily: {
        sans: "Vazirmatn , sans-serif",
      },
      clipPath: {
        curved: 'ellipse(50% 50% at 50% 50%)',
      },
      screens: {
        xs: { max: "350px" },
        sm: { max: "375px" },
        md: { max: "450px" },
        lg: { max: "500px" },
        xl: { max: "600px" },
      },
      animation: {
        'fill': 'fill 2s infinite',
        'steam': 'steam 2s infinite',
      },
      keyframes: {
        fill: {
          '0%, 100%': { height: '0' },
          '50%': { height: '70%' },
        },
        steam: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
          '100%': { transform: 'translateY(-40px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};