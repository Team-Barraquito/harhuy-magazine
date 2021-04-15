module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    screens: {
      mobile: "320px",
      tablet: "481px",
      laptop: "769px",
      desktop: "1025px",
      xl: "1201px",
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
      },
      fontSize: {
        xxs: "0.1rem",
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
