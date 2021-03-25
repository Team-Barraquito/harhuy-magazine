<template>
  <div class="flex  w-64 h-10 bg-white border-1 border-black">
    <decrease-button> </decrease-button>
    <div class="w-44 flex justify-center items-center"> {{quantity}} </div>
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
