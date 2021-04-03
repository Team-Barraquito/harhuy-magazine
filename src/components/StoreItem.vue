<template>
  <div @click="goToProductSheet"  class="relative text-black">
    <img :src="getSource" :alt=item.name>
    <div class="absolute bottom-2 left-2 text-xs"> {{ item.name }}</div>
  </div>
</template>

<script>
export default {
  // Todo se puede cambiar el prop por data
  props: {
    item: {
      name: String,
      urlName: String,
      isInStock: Boolean,
      rating: Number,
      price: Number,
      photos: Object,
    },
  },
  methods: {
    goToProductSheet () {
      this.$router.push({ path: `/store/${this.$props.item.urlName}` });
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
