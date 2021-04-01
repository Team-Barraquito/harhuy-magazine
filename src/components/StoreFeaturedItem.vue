<template>
  <div class="flex ml-20">
    <img :src=getPhoto() class="w-116 h-116">
    <div class="info-container w-116 h-116">
      <div class="h-1/3 flex items-end">
        <h1 class="text-3xl p-1 font-bold"> Producto destacado </h1>
      </div>
      <p class="mt-4 p-1 text-2xl text-center"> {{ itemData.description }}  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreFeaturedItem",
  data () {
    return {
      itemData: {},
    };
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
      // TODO usar getter
      this.itemData = this.$store.state.featuredItems[`${currentMonth}`];
    },
    getPhoto () {
      const photoPath = this.itemData.photo;
      return require("../assets/images" + photoPath);
    },
  },
  beforeMount () {
    this.setData();
  },
};
</script>

<style>

</style>
