/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgb(182 62 150)",
        second: "rgb(50, 50, 50)",
        "nav-inactive": "rgb(103, 103, 103)",
        "card-bg": "#222222",
        "tx-color": "white",
        "t-color": "rgb(91, 120, 246)",
      },
      backgroundImage: {
        "bg-gr2":
          "linear-gradient(120deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))",
        "bg-gr":
          "linear-gradient(120deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1))",
        "bg-gr1":
          "linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.01))",
        img: "linear-gradient(90deg, rgb(91, 120, 246) -15%, rgb(194, 235, 255) 58%, rgb(91, 120, 246) 97%)",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        sora: ["Sora", "serif"],
      },

      width: {
        "100p": "100%",
        "50p": "50%",
      },
      screens: {
        "lg-custom": "920px",
        lg: "1000px",
        xs: "100px",
      },
    },
  },
  plugins: [],
};
