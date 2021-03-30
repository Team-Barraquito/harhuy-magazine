<template>
  <div class="relative text-black">
    <img  :alt=item.name srcset="">
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
  computed: {
    getSource (path) {
      console.log(path);
      return require();
    },
  },
  mounted () {
    const props = this.$props.item.photos.front;
    // Console.log(typeof props);
    this.getSource(props);
  },
};
</script>

<style scoped>

</style>
