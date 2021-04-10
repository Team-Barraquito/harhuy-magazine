import Vue from "vue";
import Vuex from "vuex";
const productDatabase = require("../assets/database/store-items.json");
const artistsDatabase = require("../assets/database/artists.json");

// TODO change names to mutations and check other things

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    items: productDatabase.items,
    featuredItems: productDatabase.featuredItems,
    itemQuantity: 0,
    illustrationArtists: artistsDatabase.categories.illustration,
    photographyArtists: artistsDatabase.categories.photography,
    musicArtists: artistsDatabase.categories.music,
    videoArtists: artistsDatabase.categories.video,
    designArtists: artistsDatabase.categories.design,

  },

  mutations: {
    sumar (state) {
      state.itemQuantity += 1;
    },
    restar (state) {
      if (state.itemQuantity > 0) { state.itemQuantity -= 1; }
    },

    pushToCart (state, item) {
      /* Create new property, push to cart and reset counter */
      item.quantity = state.itemQuantity;
      state.cart.push(item);
    },

    popFromCart (state, name) {
      // Search the index in the array array and delete it
      const itemIndex = state.cart.findIndex((item) => item.name === name);
      state.cart.splice(itemIndex, 1);
    },

    reset (state) {
      // Reset item quantity each time you change item view
      state.itemQuantity = 0;
    },
  },
  actions: {
    reduceQuantity (context) {
      context.commit("restar");
    },
    increaseQuantity (context) {
      context.commit("sumar");
    },
    addToCart (context, item) {
      context.commit("pushToCart", item);
    },
    resetQuantity (context) {
      context.commit("reset");
    },
    removeFromCart (context, name) {
      context.commit("popFromCart", name);
    },
  },
  getters: {
    items: (state) => (name) => {
      return state.items.find((item) => item.urlName === name);
    },
    cartItems: (state) => {
      return state.cart;
    },
    numberOfCartItems: (state) => {
      return state.cart.length;
    },
  },
  modules: {
  },
});
