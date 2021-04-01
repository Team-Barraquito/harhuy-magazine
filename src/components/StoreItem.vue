<template>
  <div @click="clicked"  class="relative text-black">
    <img :src="getSource" :alt=item.name>
    <div class="absolute bottom-2 left-2 text-xs"> {{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "StoreItem",
  props: {
    item: {
      name: String,
      isInStock: Boolean,
      rating: Number,
      price: Number,
      photos: Object,
    },
  },
  methods: {
    clicked () {
      console.log("pinxaste");
      const itemRoute = this.$props.item.name.replaceAll(" ", "");
      this.$router.push(`/store/${itemRoute}`);
    },
  },

  computed: {
    getSource () {
      const frontPath = this.$props.item.photos.front;
      return require("../assets/images" + frontPath);
    },
  },
};
</script>

<style scoped>

</style>
