<template>
  <div class="flex ml-20">
    <img :src="getSource" :alt="info.name" class="w-116 h-116">
    <div class="info-container w-116 h-116">
      <div class="h-1/3 flex items-end">
        <h1 class="text-3xl p-1 font-bold"> Producto destacado </h1>
      </div>
      <p class="mt-4 p-1 text-2xl text-center"> {{ info.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreFeaturedItem",
  props: {
    info: {
      type: Object,
      name: String,
      isInStock: Boolean,
      rating: Number,
      price: Number,
      photo: String,
      description: String,
      required: true,
    },
  },
  computed: {
    getSource () {
      const photoPath = this.$props.info.photo;
      return require("../assets/images" + photoPath);
    },
  },
};
</script>

<style>

</style>
