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
        "tx-color":"white"
      },
      width: {
        "100p": "100%",
        "50p": "50%",
      },
      screens: {
        "lg-custom": "920px",
        lg: "1000px",
      },
    },
  },
  plugins: [],
};
