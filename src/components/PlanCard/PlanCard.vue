<template>
  <div class="card-container">
    <div class="card-bg">
      <svg  class=" cards" width="370" height="615" viewBox="0 0 370 615" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.2576 12.043H43.8274C41.8235 5.09303 35.4692 0 27.9602 0C26.2298 0 24.8274 1.41872 24.8274 3.16922V12.043H3.1328C1.40242 12.043 0 13.4617 0 15.2122V77.9627C0 79.7132 1.40242 81.1319 3.1328 81.1319H53.2576C54.988 81.1319 56.3904 79.7132 56.3904 77.9627V15.2122C56.3904 13.4617 54.988 12.043 53.2576 12.043ZM27.9602 74.7935H6.2656V18.3815H24.8274V50.8659C24.8274 52.6164 26.2298 54.0351 27.9602 54.0351C33.6176 54.0351 38.2201 58.6912 38.2201 64.4143C38.2201 70.1375 33.6176 74.7935 27.9602 74.7935ZM38.2201 51.3178C36.1795 49.6781 33.7486 48.5156 31.093 47.9981V6.833C35.2226 8.1762 38.2201 12.0993 38.2201 16.7176V51.3178ZM50.1248 74.7935H40.9057C43.1457 71.94 44.4857 68.3325 44.4857 64.4143V18.3815H50.1248V74.7935Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7968 114.186C60.3215 114.186 93.984 80.1039 93.984 38.0619C93.984 25.4297 90.9449 13.5161 85.5666 3.02973C84.8659 1.66336 85.8358 0 87.3714 0H349C360.598 0 370 9.40202 370 21V594C370 605.598 360.598 615 349 615H21C9.40201 615 0 605.598 0 594V114.375C0 113.066 1.23735 112.11 2.51518 112.396C7.75789 113.568 13.2061 114.186 18.7968 114.186Z" fill="black"/>
      </svg>
    </div>

    <div class="content-container">
      <h1 class="title ">{{title}}</h1>
      <div class="price-box">
        <h2 class="price">{{price}}</h2>
        <p class="iva">IVA incluido incluye <span class="font-bold">{{duration}}</span> meses</p>
      </div>
      <div class="cart">
        <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v"/>
          <button @click="submit" class="button">Compralo ya!</button>
      </div>
      <div class="image-container">
        <img src="../../assets/images/suscription/plan-premium-plus.jpg" alt="Imagen del Plan Premium">
      </div>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "PlanCard",
  data () {
    this.publishableKey = "pk_test_51IdHovLav5xUnjDzK3aPFqXRLDNCruUugBriLDajPnHuyuM8qjtJj9zZC7Ingh0e4dBAqw2umPE6mUiUa4MAKW1e00onBnTjju";
    return {
      lineItems: [
        {
          price: this.itemid,
          quantity: 1,
        },
      ],
      successURL: "https://www.harhuymag.com/success",
      cancelURL: "https://www.harhuymag.com/denied",
    };
  },
  props: ["title", "price", "duration", "itemid"],
  components: {
    StripeCheckout,
  },
  methods: {
    submit () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.card-container {
  width: auto;
  display: grid;
  grid-template-areas: all;
  justify-content: center;
  align-items: center;
  padding: 2%;
  overflow: hidden;
  @apply xl:w-2/6
}

.card-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  position: inherit;
  grid-area: all;
}

.content-container {
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: all;
  color: white;
}

.title {
  width: 100%;
  font-size: 145%;
  padding: 25% 0 5% 0;
  color: #f4d116;
  @apply tablet:text-base tablet:font-semibold laptop:text-2xl laptop:pt-12 xl:text-base xxl:text-2xl xxl:pt-4 xxl:pb-2;
}

.price-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 0 5% 0;
  @apply laptop:pb-8 xl:pb-3;
}

.price {
  font-size: 150%;
  width: 50%;
  color: #f4d116;
  @apply tablet:text-lg laptop:text-xl xl:text-base xxl:text-xl;
}

.iva {
  width: 50%;
  padding: 2% 0 2% 0;
  font-size: 80%;
  text-align: left;
  color: #f4d116;
  @apply tablet:text-xs laptop:text-base  xl:text-sm xxl:text-base;
}

.cart {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.cart-text {
  width: 100%;
  padding: 0 0 0 5%;
  font-size: 80%;
  text-align: left;
}

.cards {
  @apply tablet:w-full tablet:h-11.5/12;
}

.button {
  @apply tablet:w-4/5 tablet:h-1/3 laptop:w-9/12 laptop:h-2.3/5 desktop:w-4/5 desktop:h-14 desktop:text-lg xl:h-11 xl:text-base xxl:w-3/5 xxl:h-11 border-white border-2 p-0 rounded-md pt-1 pb-1 mb-2 uppercase font-bold;
}
</style>
