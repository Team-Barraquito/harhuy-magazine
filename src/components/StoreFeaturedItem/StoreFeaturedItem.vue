<template>
  <div class="flex m-20 items-center justify-content w-auto">
    <img :src=getPhoto() class="w-1/2 h-80 object-cover">
    <div class="info-container w-1/2 h-80 p-5 flex flex-col items-center justify-content">
      <div class="h-auto flex flex-col items-center justify-center">
        <h1 class="text-3xl p-1 font-bold text-center"> Producto destacado </h1>
      </div>
      <p class="mt-4 p-1 text-1xl text-center"> {{ itemData.description }}  </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "StoreFeaturedItem",
  data () {
    return {
      itemData: {},
    };
  },
  computed: {
    ...mapState(["featuredItems"]),
  },
  methods: {
    getMonth () {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const currentMonthIndex = new Date().getUTCMonth();
      return months[currentMonthIndex];
    },
    setData () {
      const currentMonth = this.getMonth();
      this.itemData = this.featuredItems[`${currentMonth}`];
    },
    getPhoto () {
      const photoPath = this.itemData.photo;
      return require("../../assets/images/store" + photoPath);
    },
  },
  beforeMount () {
    this.setData();
  },
};
</script>

<style>

</style>
