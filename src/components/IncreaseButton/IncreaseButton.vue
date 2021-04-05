<template>
<button @click=increaseQuantity class="w-10 h-10 bg-black text-white " >+</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "IncreaseButton",
  methods: {
    ...mapActions(["increaseQuantity"]),
  },
};
</script>

<style scoped>

</style>
