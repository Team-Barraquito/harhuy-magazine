<template>
<!-- TODO ajustar tamaño de pantalla -->
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
    <div class=" w-full h-20 flex">
      <div class="w-9/12 flex">
        <div class="uppercase w-1/3 flex justify-center items-center"><a target="_blank" rel="noopener noreferrer">instagram</a></div>
        <div class="uppercase w-1/3 flex justify-center items-center"><a href="#" target="_blank">facebook</a></div>
        <div class="uppercase w-1/3 flex justify-center items-center"><a href="#" target="_blank" >twitter</a></div>
      </div>
      <div class="w-3/12 flex justify-center items-center">
          <!-- TODO preguntarle a manz como unirlo en un contenedor-->
        <div class="h-full w-1/2 flex justify-end items-center p-2">
        <a href="#" target="_blank" rel="noopener noreferrer" class="uppercase"> contact us </a>
        </div>
        <div class="h-full w-1/2 flex  items-center">
          <svg id="arrow" viewBox="0 0 61 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1324 28.6798L55.1098 28.6573L36.8042 46.9629L31.8544 42.0132L46.8676 27H0V20H46.4526L31.4023 4.94975L36.3521 0L60.0822 23.7301L55.1324 28.6798Z" fill="black"/>
          </svg>
        </div>
      </div>
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

#arrow {
  height: 1.5rem;
  width: 1.5rem;
}
 /* Falta rellenar on hover */
</style>
