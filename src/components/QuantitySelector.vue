<template>
  <div class="flex  w-64 h-28 bg-pink-50">
    <decrease-button> </decrease-button>
    <div class="w-10 h-10"> {{quantity}} </div>
    <increase-button> </increase-button>
  </div>
</template>

<script>
import DecreaseButton from "@/components/DecreaseButton.vue";
import IncreaseButton from "@/components/IncreaseButton.vue";

export default {
  name: "QuantitySelector",
  components: {
    DecreaseButton,
    IncreaseButton,
  },

  data () {
    return {
      quantity: 0,
    };
  },

};
</script>

<style>

</style>

DecreaseButton
