/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        FEOrange: "hsl(26, 100%, 55%)",
        FEPaleOrange: "hsl(25, 100%, 94%)",
        FEVeryDarkBlue: "hsl(220, 13%, 13%)",
        FEDarkGrayishBlue: "hsl(219, 9%, 45%)",
        FEGrayishBlue: "hsl(220, 14%, 75%)",
        FELightGrayishBlue: "hsl(223, 64%, 98%)",
        FEWhite: "hsl(0, 0%, 100%)",
        FEBlackLightBox: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        FEKumbhSans: ["Kumbh Sans"],
      },
      letterSpacing: {
        1: "0.2em",
        2: "0.3em",
        3: "0.4em",
        4: "0.5em",
      },
    },
  },
  plugins: [],
};
