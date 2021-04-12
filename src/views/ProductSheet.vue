<template>
  <div>
    <TopBar> </TopBar>
    <div class="flex w-screen">
      <SideMenu> </SideMenu>
      <!-- inicio contenedor fotos -->
      <div class="images-container flex flex-col ml-10">
        <!-- hacer mas pequeñas si tal -->
        <img class="w-116 h-116" :alt=itemData.name v-for="(photo,index) in itemData.photos" :key=index :src=getPhoto(photo)>
      </div>
      <!-- Final contenedor fotos -->

      <div class="info-container w-128">
        <!-- Inicio estrellas y stock -->
        <div class="stars-and-stock flex bg-yellow-400 w-full h-auto">
          <div class="stars flex w-1/2 justify-end items-center"> <star-rating :rating="itemData.rating" :starStyle="style"> </star-rating>  </div>
          <div v-if=itemData.isInStock class="text-stock flex w-1/2 justify-end items-center"> En stock </div>
          <div v-else class="text-red-700"> Sin stock </div>
        </div>
        <!-- Final estrellas y stock -->
        <!-- Inicio nombre y precio -->
        <div class="name-and-price mt-9 bg-green-400">
          <h1 class="text-7xl font-extrabold"> {{ itemData.name }} </h1>
          <div class="text-5xl mt-6"> {{ price }}</div>
        </div>
        <!-- Final nombre y precio -->
        <!-- Inicio botones -->
        <div class="buttons-container mt-5">
          <!-- corregir esto -->
          <QuantitySelector> </QuantitySelector>
          <div class="flex mt-4 justify-around">
          <!-- Cada boton es un compo -->
           <button @click=addToCart(itemData) class="w-72  h-14 border-2 border-black uppercase"> Añadir al carrito </button>
           <button class="w-72 h-14 border-2 border-black text-white bg-black uppercase" > Comprar ya! </button>
          </div>
        </div>
        <!-- Final botones-->
        <!-- Descripción -->
        <p> {{ itemData.description }} </p>
        <!-- Final descripcion -->
        <!-- Inicio  social media -->
        <div class="social-media w-full mt-6 flex">
          <div class="flex flex-col">
            <div> Compartir </div>
            <svg width="288" height="47" viewBox="0 0 288 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M282.73 28.6798L282.707 28.6573L264.402 46.9629L259.452 42.0132L274.465 27H0V20H274.05L259 4.94975L263.95 0L287.68 23.7301L282.73 28.6798Z" fill="black"/>
            </svg>
          </div>
          <div class="circle-container flex justify-center items-center">
            <div class="w-12 h-12 rounded-full border-4 border-black ml-2 mr-2"></div>
            <div class="w-12 h-12 rounded-full border-4 border-black ml-2 mr-2"></div>
            <div class="w-12 h-12 rounded-full border-4 border-black ml-2 mr-2"></div>
          </div>
        </div>
        <!-- Final social media-->
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import QuantitySelector from "@/components/QuantitySelector/QuantitySelector.vue";
import StarRating from "vue-dynamic-star-rating";
import { mapGetters, mapActions } from "vuex";

// TODO deshabilitar botones si no hay stock

export default {
  name: "ProductSheet",
  components: {
    TopBar,
    SideMenu,
    QuantitySelector,
    StarRating,
  },
  data () {
    return {
      itemData: {},
      style: {
        fullStarColor: "#ed8a19",
        emptyStarColor: "#737373",
        starWidth: 30,
        starHeight: 30,
      },
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

    setRating () {
      this.config.rating = this.itemData.rating;
    },
  },

  computed: {
    ...mapGetters(["items"]),

    price () {
      return this.itemData.price + "€";
    },
  },

  beforeMount () {
    this.getData();
    this.resetQuantity();
  },
};
</script>

<style>

</style>
