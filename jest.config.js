module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  jest: {
    transform: {
      // Process `*.js` files with `babel-jest`
      ".*\\.(js)$": "babel-jest",
    },
  },
};
