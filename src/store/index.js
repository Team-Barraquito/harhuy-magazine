import Vue from "vue";
import Vuex from "vuex";
const productDatabase = require("../assets/database/store-items.json");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    items: productDatabase.items,
    featuredItems: productDatabase.featuredItems,
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
