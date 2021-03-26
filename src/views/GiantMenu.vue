<template>
  <div class="w-screen h-screen bg-harhuy">
    <div class="top-zone overflow-hidden w-screen h-28 bg-black grid grid-rows-1 grid-cols-3">
      <div class="bg-gray-400"></div>
      <div class="bg-green-300 flex items-center justify-center">
        <img class="w-40" src="../assets/images/Harhuy.png" alt="harhuhy logo" srcset="">
      </div>
      <!-- Fixear -->
      <div class="bg-red-300 flex justify-end">
        <div class="w-20 h-1/4"><a class="p-2" href="#">Tienda</a></div>
        <div class="w-24 h-1/4"><a class="p-2"  href="#">Us \ es</a></div>
      </div>
  </div>
    <circular-cursor> </circular-cursor>
  </div>
</template>

<script>
import CircularCursor from "@/components/CircularCursor.vue";
export default {
  name: "GiantMenu",
  components: {
    CircularCursor,
  },
};
</script>

<style>

</style>
