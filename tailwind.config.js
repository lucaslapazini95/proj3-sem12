export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        corBege: "#FCF8F3",
        gold: {
          500: "#B88E2F",
        },
      },
      keyframes: {
        "slide-in-top": {
          "0%": { top: "0" },
          "100%": { top: "50px" },
        },
      },
      animation: {
        "slide-in-top": "slide-in-top 0.3s forwards",
      },
    },
  },
  plugins: [],
};
