<template>
  <div @click="goToProductSheet"  class="prueba relative text-black">
    <img :src="getSource" :alt=item.name>
    <div class="absolute bottom-2 left-2 text-xs"> {{ item.name }}</div>
    <div class="overlay absolute bottom-0 left-0 right-0 bg-harhuy overflow-hidden w-full h-0">
      <div class="text whitespace-nowrap text-black overflow-hidden absolute text-xl top-1/2 left-1/2">
        <ul>
          <li> {{ item.price}}€</li>
          <li v-if=item.isInStock> En stock 😃</li>
          <li v-else> No hay stock 😣</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreItem",
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
      return require("../../assets/images/store" + frontPath);
    },
  },
};
</script>

<style scoped>
.overlay{
  transition: .5s ease;
}
.text {
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%,-50%);
}

.prueba:hover .overlay{
  height: 100%;
}
</style>
