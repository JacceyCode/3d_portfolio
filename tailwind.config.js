/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      inset: {
        top: "-9rem -3rem 0",
        bottom: "0 -3rem -9rem",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        imageScroll: "imageScroll 30s linear infinite",
      },
      keyframes: {
        imageScroll: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-93%)" },
        },
      },
    },
  },
  plugins: [],
};
