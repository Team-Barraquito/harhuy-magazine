<template>
  <div>
      <h1>Cart</h1>
    <ul class="cart-list">
      <li class="flex-col cart-list__item" v-for="item in cartItems" :key=item.name>
        <img :src="getSource(item)" class="thumbnail" :alt=item.name>
        <div class="flex-col cart-list__item__details">
          <div>
            <p>{{ item.name }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <p>Size: {{ item.size }}</p>
          </div>
          <p>${{ calculatePrice(item) }}</p>
          <button
            @click=removeFromCart(item.name)
            class="btn cart-list__btn-remove">
            Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  methods: {
    ...mapActions(["removeFromCart"]),
    getSource (item) {
      const frontPath = item.photos.front;
      return require("../assets/images" + frontPath);
    },
    calculatePrice (item) {
      return item.price * item.quantity;
    },
  },
  computed: {
    ...mapGetters(["cartItems"]),

  },
};
</script>

<style lang="postcss" scoped>
.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}

</style>
