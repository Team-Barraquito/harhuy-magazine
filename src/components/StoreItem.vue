<template>
  <div class="relative text-black">
    <img :src="item.photos.front" :alt=item.name>
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
  /* Require here object photos */
  mounted () {
    console.log(this.$props.item.photos.front);
  },
};
</script>

<style scoped>

</style>
