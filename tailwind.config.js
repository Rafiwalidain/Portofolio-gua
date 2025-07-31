/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
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
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg2.png')",
      // },
    },
    animation: {
      "ping-sparkle": "sparkle 0.6s ease-out forwards",
    },
    keyframes: {
      sparkle: {
        "0%": {
          opacity: 1,
          transform: "scale(1)",
        },
        "100%": {
          opacity: 0,
          transform: "scale(1.8)",
        },
      },
    },
  },
  plugins: [],
};
