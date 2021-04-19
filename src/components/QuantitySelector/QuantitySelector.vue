<template>
  <div class="flex  w-4/6 h-10 bg-white border-1 border-black">
    <decrease-button> </decrease-button>
    <div class="w-3/5 flex justify-center items-center" role="text"> {{itemQuantity}} </div>
    <increase-button> </increase-button>
  </div>
</template>

<script>
import DecreaseButton from "@/components/DecreaseButton/DecreaseButton.vue";
import IncreaseButton from "@/components/IncreaseButton/IncreaseButton.vue";
import { mapState } from "vuex";

export default {
  name: "QuantitySelector",
  components: {
    DecreaseButton,
    IncreaseButton,
  },
  computed: {
    ...mapState(["itemQuantity"]),
  },

};
</script>

<style scoped>

</style>
