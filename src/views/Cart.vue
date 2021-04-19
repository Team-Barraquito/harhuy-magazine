<template>
  <div class="cart w-screen">

    <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

      <div class="w-full flex flex-col items-center h-5/6">
        <!-- List -->

       <ul class="xxl:w-4/6 desktop:w-5/6 laptop:w-11/12 tablet:w-11.5/12 mt-4">
         <li class="cart-list__item my-2" v-for="item in cartItems" :key=item.name>
           <div class="w-full flex">
             <img :src="getSource(item)" class="thumbnail xxl:w-1/4 tablet:w-2/6 object-cover h-auto" :alt=item.name>
              <div class=" flex flex-col w-3/4 tablet:w-4/6 justify-center items-center">
                <div class="xxl:w-7/12 ml-3 text-left flex flex-col text-lg">
                 <p class="font-bold xxl:text-xl tablet:text-base">{{ item.name }}</p>
                 <p class="text-gray-500 xxl:text-lg laptop:text-base tablet:text-sm">Quantity: {{ item.quantity }}</p>
                 <p class="text-gray-500 xxl:text-lg laptop:text-base tablet:text-sm" v-if="hasSize(item)">Size: {{ item.size }}</p>
                 <p class="text-black xxl:text-lg tablet:text-base">{{ calculatePrice(item) }}€</p>
                 <button @click=removeFromCart(item.name) class="cart-list__btn-remove laptop:text-base tablet:text-base xxl:text-lg"> Eliminar </button>
               </div>
             </div>
           </div>
         </li>
       </ul>
       <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v"> </stripe-checkout>
       <button @click=submit class=" btn rounded-md bg-black text-white xxl:w-1/5 tablet:w-3/5"> Comprar ya </button>
      </div>
      <!-- Final content -->
    </div>
    <div class="footer-container"> <Footer> </Footer> </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import { mapGetters, mapActions } from "vuex";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Cart",
  components: {
    TopBar,
    SideMenu,
    StripeCheckout,
    Footer,
  },
  data () {
    this.publishableKey = "pk_test_51IdHovLav5xUnjDzK3aPFqXRLDNCruUugBriLDajPnHuyuM8qjtJj9zZC7Ingh0e4dBAqw2umPE6mUiUa4MAKW1e00onBnTjju";
    return {
      lineItems: [],
      successURL: "https://www.harhuymag.com/success",
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

    hasSize (item) {
      return "size" in item;
    },

    checkIfEmpty () {
      if (this.cartItems.length === 0) {
        this.$el.querySelector(".btn").setAttribute("disabled", "true");
        this.$el.querySelector(".btn").classList.add("disabled");
      } else {
        this.$el.querySelector(".btn").removeAttribute("disabled");
      }
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
    this.checkIfEmpty();
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

.data-container {
  align-content: center;
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}

.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red;
  }
}

.disabled {
  color: rgba(185, 28, 28,1);

}
</style>
