<template>
<!-- TODO ajustar tamaño de pantalla -->
  <div class="w-screen h-screen bg-harhuy menu overflow-hidden"  @mousemove="moveCustomCursor">
    <CircularCursor id="customCursor"> </CircularCursor>

  <!-- start top zone -->
  <div class=" flex justify-between w-screen h-2/6 bg-harhuy overflow-hidden">

    <!-- start top left zone -->
    <div class="w-1/3 flex place-items-start justify-start overflow-hidden">
      <div class="w-32 h-full flex flex-col mx-10 mb-5 mt-10 overflow-hidden justify-start items-center">
        <div class=" h-32 flex justify-center items-center">
          <button @click=goToBefore class=" h-full flex flex-col items-center justify-center text-xs outline bg-red-300">
            <div class="h-1/2">
              <svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-3.5" x2="55.5613" y2="-3.5" transform="matrix(0.699963 0.709914 -0.704254 0.714266 0 7.21875)" stroke="black" stroke-width="7"/>
                <line y1="-3.5" x2="55.5613" y2="-3.5" transform="matrix(-0.699963 0.709914 0.704254 0.714266 43.8906 7.33984)" stroke="black" stroke-width="7"/>
              </svg>
            </div>
            <div class="h-1/2 w-full flex justify-center items-center m-2">
              <div class=" text-black uppercase font-extrabold tracking-wide rotate w-full align-buttom text-center m-0"> volver</div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- end top left zone -->

    <!-- start top middle zone -->
    <div class="w-1/3 flex items-start justify-center">
      <div class="w-full h-full flex justify-center items-start my-10">
        <div class="w-full h-24 flex justify-center items-center">
          <svg @click=goToIndex class="w-full h-full my-10" viewBox="0 0 218 117"  xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4909 45.5911H10.9687V0.0444394H0.802018V99H10.9687V48.3022H22.4909V99H32.6576V0.0444394H22.4909V45.5911ZM49.1022 100.356C43.951 100.356 41.2399 97.2378 41.2399 90.7311V81.3778C41.2399 70.3978 46.9333 66.06 57.6422 56.0289V30.9511C57.6422 26.6133 56.5577 25.5289 52.0844 25.5289C45.0355 25.5289 43.2733 28.5111 43.2733 33.2556C43.2733 38.9489 45.5777 43.9644 56.6933 55.2156H43.6799C40.9688 48.7089 40.1555 40.9822 40.1555 34.7467C40.1555 26.2067 46.7977 16.3111 55.3377 16.3111C63.1999 16.3111 67.131 20.5133 67.131 27.4267V83.0044C67.131 90.3244 68.4866 91.1378 69.9777 91.1378C71.1977 91.1378 72.1466 90.3244 72.2822 85.8511L72.6888 62.1289H74.5866L74.9933 85.3089C75.1288 93.8489 73.7733 100.356 67.4022 100.356C61.8444 100.356 59.4044 96.4244 61.031 77.1756L59.6755 76.9044C57.6422 97.1022 54.2533 100.356 49.1022 100.356ZM53.0333 90.46C56.0155 90.46 57.6422 82.1911 57.6422 69.72V58.8756C51.6777 64.5689 50.7288 67.9578 50.7288 73.6511V87.2067C50.7288 89.6467 51.6777 90.46 53.0333 90.46ZM100.352 26.3422C96.0139 26.3422 91.2695 33.5267 91.2695 47.2178V99H81.7806V17.6667H91.1339V19.1578L88.1517 39.7622L89.5072 40.0333C92.3539 19.7 95.7428 16.3111 100.352 16.3111C104.418 16.3111 106.452 20.7844 106.452 29.7311C106.452 33.2556 106.045 42.3378 103.741 54.4022H93.4384C101.165 38.1356 104.012 32.3067 104.012 29.8667C104.012 27.4267 102.792 26.3422 100.352 26.3422ZM122.008 0.0444394V19.1578L118.754 39.7622L120.11 40.0333C122.957 19.7 127.566 16.3111 132.717 16.3111C137.732 16.3111 141.392 20.5133 141.392 27.2911V99H131.903V32.5778C131.903 27.6978 131.226 25.5289 128.65 25.5289C124.854 25.5289 122.008 34.8822 122.008 47.6244V99H112.519V0.0444394H122.008ZM170.267 99V97.5089L173.52 76.9044L172.164 76.6333C169.318 96.9667 164.709 100.356 159.558 100.356C154.542 100.356 150.882 96.1533 150.882 89.3756V17.6667H160.371V84.0889C160.371 88.9689 161.049 91.1378 163.624 91.1378C167.42 91.1378 170.267 81.7844 170.267 69.1778V17.6667H179.755V99H170.267ZM203.072 74.7356H201.581L198.599 47.6244L194.125 17.6667H183.823L197.243 87.8844H201.174L187.212 116.622H198.87L217.848 17.6667H206.732L203.072 74.7356Z" fill="#000"/>
          </svg>
        </div>
      </div>
    </div>
    <!-- end of top middle zone -->

    <!-- start top right zone -->
    <div class="w-1/3 flex justify-end">
      <div class="w-32 h-auto flex flex-col m-10 overflow-hidden justify-start items-center">
        <div class="w-full h-2/4 flex items-start justify-center">
        <router-link to="/store" class="uppercase text-black">Tienda</router-link>
        <StoreBadge> </StoreBadge>
        </div>
        <!-- end of top right zone -->
      </div>
    </div>
   <!-- end of full right zone -->
  </div>
  <!-- end top zone -->
  <!-- middle zone -->
    <div class="w-full h-3/6 grid grid-cols-1 grid-rows-3">
      <div class="flex justify-center items-center"><router-link to="/aboutUs" class="text-7xl uppercase text-stroke-4 text-stroke-color-black text-transparent">El proyecto</router-link></div>
      <div class="flex justify-center items-center"><router-link to="/contactUs" class="text-7xl uppercase text-stroke-4 text-stroke-color-black text-transparent">Contacto</router-link></div>
      <div class="flex justify-center items-center"><router-link to="/suscripcion" class="text-7xl uppercase text-stroke-4 text-stroke-color-black text-transparent">Suscripción</router-link></div>
    </div>
  <!-- end middle zone -->
  <!-- bottom zone-->
    <div class=" w-full h-auto flex my-5">
      <div class="w-5/6 flex">
        <div class="uppercase w-1/3 flex justify-center items-center"><a target="_blank" rel="noopener noreferrer">instagram</a></div>
        <div class="uppercase w-1/3 flex justify-center items-center"><a href="#" target="_blank">facebook</a></div>
        <div class="uppercase w-1/3 flex justify-center items-center"><a href="#" target="_blank" >twitter</a></div>
      </div>
      <div class="w-1/6 flex justify-center items-center">
          <!-- TODO preguntarle a manz como unirlo en un contenedor-->
        <div class="h-full w-1/2 flex justify-end items-center p-2">
          <router-link to="/contactUs" class="uppercase font-bold leading-none"> contact us </router-link>
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
import CircularCursor from "@/components/CircularCursor/CircularCursor.vue";

export default {
  name: "GiantMenu",
  components: {
    CircularCursor,
  },

  methods: {
    moveCustomCursor (event) {
      const cursor = this.$el.querySelector("#customCursor");
      cursor.style.top = event.pageY + "px";
      cursor.style.left = event.pageX + "px";
    },
    goToBefore () {
      this.$router.go(-1);
    },
  },

  mounted () {
    this.$el.addEventListener("mousemove", this.moveCustomCursor);
  },

  destroyed () {
    this.$el.removeEventListener("mousemove", this.moveCustomCursor);
  },
};
</script>

<style scoped>
* {
  cursor: none;
}

#arrow {
  height: 1.5rem;
  width: 1.5rem;
}

.rotate {
  transform: rotate(270deg);
}

/* Falta rellenar on hover */
</style>
