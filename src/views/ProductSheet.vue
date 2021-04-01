<template>
  <div>
    <TopBar> </TopBar>
    <div class="flex">
      <SideMenu> </SideMenu>
      <div class="images-container flex flex-col ml-10">
        <!-- hacer mas pequeñas si tal -->
        <img class="w-116 h-116" :alt=itemData.name v-for="(photo,index) in itemData.photos" :key=index :src=getPhoto(photo)>
      </div>
      <div class="info-container w-128">
        <div class="stars-and-stock flex bg-yellow-400 w-full h-auto">
          <div class="stars flex w-1/2 justify-end items-center"> Aqui van las estrellas </div>
          <div v-if=itemData.isInStock class="text-stock flex w-1/2 justify-end items-center"> En stock </div>
          <div v-else class="text-red-700"> Sin stock </div>
        </div>
        <div class="name-and-price mt-9 bg-green-400">
          <h1 class="text-7xl font-extrabold"> {{ itemData.name }} </h1>
          <div class="text-5xl mt-6"> {{ price }}</div>
        </div>
        <div class="buttons-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideMenu from "@/components/SideMenu.vue";
export default {
  name: "ProductSheet",
  components: {
    TopBar,
    SideMenu,
  },
  data () {
    return {
      itemData: {},
    };
  },
  methods: {
    getData () {
      this.itemData = this.$store.getters.items(this.$route.params.name);
    },
    getPhoto (photo) {
      return require("../assets/images" + photo);
    },
  },
  computed: {
    price () {
      return this.itemData.price + "€";
    },
  },
  beforeMount () {
    this.getData();
  },
};
</script>

<style>

</style>
