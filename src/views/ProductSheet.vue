<template>
  <div class="product h-screen">

   <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

      <!-- inicio contenedor fotos -->
      <div class="flex flex-col w-1/2 h-150 items-center my-10 overscroll-contain overflow-scroll">
        <!-- hacer mas pequeñas si tal -->
        <img class="w-116 h-116" :alt=itemData.name v-for="(photo,index) in itemData.photos" :key=index :src=getPhoto(photo)>
      </div>
      <!-- Final contenedor fotos -->

      <div class="info-container w-1/2 m-10 px-16 overflow-x-hidden">
        <div class="content-container w-11/12">
         <!-- Inicio estrellas y stock -->
          <div class="stars-and-stock flex w-full h-1/6 ">
            <div class="stars flex w-3/4 justify-start items-center text-sm space-x-10">
              <star-rating :rating="itemData.rating" :starStyle="style"> </star-rating>
            </div>
            <div v-if=itemData.isInStock class="text-stock flex w-3/12 justify-end "> En stock </div>
            <div v-else class="text-red-700 flex w-3/12 justify-end"> Sin stock </div>
          </div>
          <!-- Final estrellas y stock -->

          <!-- Inicio nombre y precio -->
          <div class="name-and-price mt-7 text-left w-full h-1/6">
            <h1 class="text-4xl font-extrabold"> {{ itemData.name }} </h1>
            <div class="text-3xl mt-6"> {{ price }}</div>
          </div>
          <!-- Final nombre y precio -->

          <!-- Inicio botones -->
          <div class="flex flex-col justify-center items-center my-10 mt-10  mb-8 w-full h-1/6">
            <QuantitySelector> </QuantitySelector>
          </div>

          <div class="flex my-4 justify-between w-full h-10">
            <button @click=checkIfQuantityisZero id="addToCart" class="w-2/5 h-full border-2 border-black uppercase rounded-sm bg-white text-sm"> Añadir al carrito </button>
            <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v"/>
            <button @click=submit id="buyNow" class="w-2/5 h-full border-2 border-black text-white bg-black uppercase rounded-sm text-sm" > Comprar ya! </button>
          </div>

          <!-- Final botones-->

          <!-- Inicio descripción-->
          <div class="description-and-media w-full h-2/6">
            <p class="text-left text-xs text-gray-500"> {{ itemData.description }} </p>
          <!-- fin descripción-->
          <!-- Inicio  social media -->
          <div class="social-media w-full my-10 flex flex-col ">
            <div class="flex flex-col items-start justify-start w-full">
              <div class="text-xs text-left"> Compartir </div>
            </div>
            <div class=" flex justify-center items-center w-full ">
              <div class="transform scale-100 flex items-start justify-start w-full flex-1/2">
                <svg width="288" height="47" viewBox="0 0 400 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M282.73 28.6798L282.707 28.6573L264.402 46.9629L259.452 42.0132L274.465 27H0V20H274.05L259 4.94975L263.95 0L287.68 23.7301L282.73 28.6798Z" fill="#F4D116"/>
                </svg>
              </div>
              <div class="w-full flex flex-1/2">
                <div class="transform scale-150 flex-1 m-0">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.244 23.242c-6.075 0-11-4.925-11-11s4.925-11 11-11c6.076 0 11 4.925 11 11s-4.924 11-11 11z" stroke="#000" stroke-miterlimit="10"/><path d="M12.244 7.856c1.43 0 1.596.005 2.16.033.52.024.805.109.994.185.251.094.426.213.616.397.19.19.303.365.397.616.071.19.161.473.185.994.024.564.033.734.033 2.16 0 1.43-.005 1.595-.033 2.159-.024.52-.109.805-.185.994a1.664 1.664 0 0 1-.397.616c-.19.19-.365.303-.616.398-.19.07-.473.16-.994.184-.564.024-.734.034-2.16.034-1.43 0-1.595-.005-2.159-.034-.52-.023-.805-.109-.994-.184a1.663 1.663 0 0 1-.616-.398 1.606 1.606 0 0 1-.398-.616c-.07-.19-.16-.473-.184-.994-.024-.564-.033-.734-.033-2.16 0-1.43.004-1.595.033-2.159.023-.52.109-.805.184-.994.095-.251.213-.426.398-.616.19-.189.365-.303.616-.397.19-.071.473-.161.994-.185.564-.028.734-.033 2.16-.033zm0-.961c-1.453 0-1.633.004-2.206.033a3.99 3.99 0 0 0-1.298.246c-.35.137-.648.317-.947.615a2.632 2.632 0 0 0-.615.948c-.133.34-.223.729-.251 1.297-.029.568-.033.753-.033 2.207 0 1.453.004 1.633.033 2.206.023.569.118.957.25 1.298.138.35.318.649.616.947.299.298.597.478.947.615.341.133.73.223 1.298.247.568.023.753.033 2.206.033 1.454 0 1.634-.005 2.207-.033a3.993 3.993 0 0 0 1.297-.247c.35-.137.65-.317.947-.615a2.63 2.63 0 0 0 .616-.947c.133-.341.223-.73.251-1.298.024-.568.033-.753.033-2.206 0-1.454-.005-1.634-.033-2.207-.024-.568-.118-.957-.25-1.297a2.63 2.63 0 0 0-.617-.948 2.631 2.631 0 0 0-.947-.615c-.34-.133-.729-.223-1.297-.246-.573-.029-.753-.033-2.207-.033z" fill="#000"/><path d="M12.245 9.492a2.748 2.748 0 0 0-2.747 2.747 2.748 2.748 0 0 0 2.747 2.746 2.748 2.748 0 0 0 2.746-2.746 2.748 2.748 0 0 0-2.746-2.747zm0 4.532a1.781 1.781 0 0 1 0-3.561 1.782 1.782 0 0 1 0 3.56zM15.744 9.386a.645.645 0 1 1-.644-.644.648.648 0 0 1 .644.644z" fill="#000"/></svg>
                </div>
                <div class="transform scale-150 flex-1 m-0">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.556 23.242c-6.076 0-11-4.925-11-11s4.924-11 11-11c6.075 0 11 4.925 11 11s-4.925 11-11 11z" stroke="#000" stroke-miterlimit="10"/><path d="M17.399 9.285a1.532 1.532 0 0 0-1.08-1.084c-.951-.256-4.768-.256-4.768-.256s-3.817 0-4.768.256a1.54 1.54 0 0 0-1.08 1.084c-.256.957-.256 2.955-.256 2.955s0 1.998.256 2.955c.142.53.554.942 1.08 1.084.951.256 4.768.256 4.768.256s3.817 0 4.768-.256a1.54 1.54 0 0 0 1.08-1.084c.256-.957.256-2.955.256-2.955s0-1.998-.256-2.955zm-7.093 4.769v-3.627l3.187 1.813-3.187 1.814z" fill="#000"/></svg>
                </div>
                <div class="transform scale-150 flex-1 m-0">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.828 23.242c-6.075 0-11-4.925-11-11s4.925-11 11-11c6.076 0 11 4.925 11 11s-4.924 11-11 11z" stroke="#000" stroke-miterlimit="10"/><path d="M6.629 15.956a6.02 6.02 0 0 0 3.267.957c3.959 0 6.194-3.344 6.061-6.346a4.372 4.372 0 0 0 1.066-1.103c-.384.17-.796.284-1.227.336.44-.265.777-.682.938-1.179a4.184 4.184 0 0 1-1.354.516 2.136 2.136 0 0 0-3.637 1.946 6.05 6.05 0 0 1-4.394-2.23 2.136 2.136 0 0 0 .658 2.846 2.147 2.147 0 0 1-.966-.265 2.131 2.131 0 0 0 1.71 2.117c-.299.08-.63.099-.962.037a2.138 2.138 0 0 0 1.994 1.482 4.264 4.264 0 0 1-3.154.886z" fill="#000"/></svg>
                </div>
                <div class="transform scale-150 flex-1 m-0">
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.105 23.242c-6.075 0-11-4.925-11-11s4.925-11 11-11c6.076 0 11 4.925 11 11s-4.924 11-11 11z" stroke="#000" stroke-miterlimit="10"/><path d="M10.651 15.729a1.88 1.88 0 0 0 1.255-.876c.204-.322.303-.687.303-1.09 0-.392-.09-.724-.265-.998-.18-.275-.44-.474-.79-.602.227-.118.402-.246.52-.388.209-.251.317-.587.317-1.004 0-.403-.104-.753-.312-1.042-.346-.473-.938-.715-1.771-.729h-3.3v6.828h3.077c.346-.01.668-.038.966-.1zm-2.685-5.555h1.487c.327 0 .597.034.805.11.247.099.37.312.37.629 0 .289-.095.488-.28.601-.184.114-.426.17-.724.17H7.962v-1.51h.004zm0 4.461v-1.818h1.681c.294.004.521.042.682.113.29.133.436.38.436.734 0 .422-.152.706-.45.853-.166.08-.398.118-.691.118H7.966zM13.366 15.373c.516.417 1.108.62 1.78.62.814 0 1.449-.246 1.899-.739.293-.307.454-.615.488-.913h-1.35c-.08.146-.17.265-.27.345-.19.156-.43.232-.734.232-.284 0-.525-.061-.729-.19-.332-.203-.507-.558-.53-1.065h3.679a7.097 7.097 0 0 0-.043-1.004 2.439 2.439 0 0 0-.402-1.041 2.036 2.036 0 0 0-.872-.748 2.894 2.894 0 0 0-1.188-.237c-.739 0-1.34.232-1.804.7-.464.47-.696 1.137-.696 2.013 0 .938.26 1.615.772 2.027zm.942-3.357c.185-.195.45-.29.786-.29.313 0 .573.09.781.27.209.18.327.45.35.8h-2.272c.052-.326.17-.586.355-.78zM16.496 9.387h-2.969v.691h2.97v-.691z" fill="#000"/></svg>
                </div>
              </div>
            </div>
          </div>
          <!-- Final social media-->
        </div>
      </div>
      </div>
    </div>
    <div class="footer-container"> <Footer> </Footer> </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import QuantitySelector from "@/components/QuantitySelector/QuantitySelector.vue";
import StarRating from "vue-dynamic-star-rating";
import { mapGetters, mapActions } from "vuex";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "ProductSheet",
  components: {
    TopBar,
    SideMenu,
    QuantitySelector,
    StarRating,
    StripeCheckout,
    Footer,
  },
  data () {
    this.publishableKey = "pk_test_51IdHovLav5xUnjDzK3aPFqXRLDNCruUugBriLDajPnHuyuM8qjtJj9zZC7Ingh0e4dBAqw2umPE6mUiUa4MAKW1e00onBnTjju";
    return {
      itemData: {},
      style: {
        fullStarColor: "#F4D116",
        emptyStarColor: "#737373",
        starWidth: 20,
        starHeight: 20,
      },

      lineItems: [
        {
          price: 0,
          quantity: 0,
        },
      ],
      successURL: "https://www.harhuymag.com/success",
      cancelURL: "https://www.harhuymag.com/denied",
    };
  },

  methods: {
    getData () {
      this.itemData = this.items(this.$route.params.name);
    },
    getPhoto (photo) {
      return require("../assets/images/store" + photo);
    },
    ...mapActions(["addToCart", "resetQuantity"]),

    checkIfQuantityisZero () {
      if (this.iQuantity > 0) { this.addToCart(this.itemData); }
    },

    setPrice () {
      this.lineItems[0].price = this.itemData.priceId;
    },

    setQuantity () {
      this.lineItems[0].quantity = this.iQuantity;
    },

    CheckIfStock () {
      const addToCart = this.$el.querySelector("#addToCart");
      const buyNow = this.$el.querySelector("#buyNow");

      if (!this.itemData.isInStock) {
        addToCart.setAttribute("disabled", "true");
        buyNow.setAttribute("disabled", "true");
        addToCart.classList.add("disabled");
        buyNow.classList.add("disabled");
      }
    },

    submit () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },

  computed: {
    ...mapGetters(["items", "iQuantity"]),

    price () {
      return this.itemData.price + "€";
    },
  },
  watch: {
    iQuantity (newValue) {
      this.setQuantity(newValue);
    },
  },
  beforeMount () {
    this.getData();
    this.resetQuantity();
  },
  mounted () {
    this.setPrice();
    this.CheckIfStock();
  },
};
</script>

<style scoped>

.disabled {
  color: rgba(185, 28, 28, 1);
}

</style>
