<template>
  <button @click=reduceQuantity class="w-1/5 h-10 bg-black text-white ">-</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DecreaseButton",
  methods: {
    ...mapActions(["reduceQuantity"]),
  },
};
</script>

<style scoped>

</style>
