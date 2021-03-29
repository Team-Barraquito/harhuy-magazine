<template>
  <div class="relative text-black">
    <img :src=item.photos.front alt="Camisa Harhuy" srcset="">
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
};
</script>

<style scoped>

</style>
