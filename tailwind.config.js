module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {  
    screens: {
      mobile: "320px",
      tablet: "480px",
      laptop: "768px",
      desktop: "1024px",
      xl: "1201px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        harhuy: "#FFEC02",
        stock: "#00800D",
      },
      borderWidth:
      {
        1: "1px",
      },
      height: {
        90: "21.875rem",
        95: "23.4375rem",
        112: "28rem",
        116: "28.125rem",
        128: "31rem",
        large: "31.25rem",
        150: "40rem",
        "2.3/5": "43.333333%",
        "4.5/6": "70%",
        "11.5/12": "95%",
      },
      width: {
        90: "21.875rem",
        95: "23.4375rem",
        100: "25rem",
        116: "28.125rem",
        128: "31rem",
        large: "31.25rem",
        "2.5/5": "45%",
        "11.5/12": "95%",
        "11.6/12": "96%",
        "11.8/12": "98%",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      scale: {
        200: "2",
        400: "4",
      },
      keyframes: {
        cross: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
      },
      animations: {
        cross: "cross 2s ease-in-out ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
