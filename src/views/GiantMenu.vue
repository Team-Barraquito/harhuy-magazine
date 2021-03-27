<template>
  <div class="w-screen h-screen bg-harhuy">
    <circular-cursor> </circular-cursor>
    <div class="top-zone overflow-hidden w-screen h-28 grid grid-rows-1 grid-cols-3">
      <!-- fixear -->
      <div class="flex justify-start items-start">
        <button class="cross-button">
          <svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-3.5" x2="55.5613" y2="-3.5" transform="matrix(0.699963 0.709914 -0.704254 0.714266 0 7.21875)" stroke="black" stroke-width="7"/>
            <line y1="-3.5" x2="55.5613" y2="-3.5" transform="matrix(-0.699963 0.709914 0.704254 0.714266 43.8906 7.33984)" stroke="black" stroke-width="7"/>
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-center">
        <img class="w-40" src="../assets/images/Harhuy.png" alt="harhuhy logo" srcset="">
      </div>
      <!-- Fixear -->
      <div class="flex justify-end">
        <div class="w-20 h-1/4"><a class="p-2" href="#">Tienda</a></div>
        <div class="w-24 h-1/4"><a class="p-2"  href="#">Us \ es</a></div>
      </div>
    </div>
  <!-- end top zone -->
  <!-- middle zone -->
    <div class="w-full h-128 grid grid-cols-1 grid-rows-3">
      <div class="flex justify-center items-center"><a href="#" class="text-7xl uppercase text-stroke-4 text-stroke-color-black text-transparent">El proyecto</a></div>
      <div class="flex justify-center items-center"><a href="#" class="text-7xl uppercase text-stroke-4 text-stroke-color-black text-transparent">Contacto</a></div>
      <div class="flex justify-center items-center"><a href="#" class="text-7xl uppercase text-stroke-4 text-stroke-color-black text-transparent">Planes de subscripción</a></div>
    </div>
  <!-- end middle zone -->
  <!-- bottom zone-->
    <div>

    </div>
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

<style scoped>

 /* Falta rellenar on hover */
</style>
