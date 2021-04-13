<template>
  <div class="cart">

    <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

      <div class="w-full content flex flex-col items-center">
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
       <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v"> </stripe-checkout>
       <button @click=submit class="rounded bg-black text-white w-14 h-14"> kyle keta </button>
      </div>
      <!-- Final content -->
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import { mapGetters, mapActions } from "vuex";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "Cart",
  components: {
    TopBar,
    SideMenu,
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51IdHovLav5xUnjDzK3aPFqXRLDNCruUugBriLDajPnHuyuM8qjtJj9zZC7Ingh0e4dBAqw2umPE6mUiUa4MAKW1e00onBnTjju";
    return {
      lineItems: [],
      successURL: "https://www.harhuymag.com/sucess",
      cancelURL: "https://www.harhuymag.com/denied",
    };
  },

  methods: {
    ...mapActions(["removeFromCart"]),
    getSource (item) {
      const frontPath = item.photos.front;
      return require("../assets/images/store" + frontPath);
    },
    calculatePrice (item) {
      return item.price * item.quantity;
    },
    populateCart () {
      this.lineItems = this.cartItems.map((item) => {
        return {
          price: item.priceId,
          quantity: item.quantity,
        };
      });
    },
    submit () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  mounted () {
    this.populateCart();
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
