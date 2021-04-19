<template>
<button role="button" @click=increaseQuantity class="w-1/5 h-full bg-black text-white " >+</button>
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
