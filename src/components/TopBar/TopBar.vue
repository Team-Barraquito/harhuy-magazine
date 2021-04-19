<template>
  <div class=" flex justify-between w-screen h-60 bg-black">

    <!-- left zone -->
    <div class="w-32 h-auto flex flex-col m-10 overflow-hidden justify-center items-center">
      <div class=" h-full flex justify-center items-center">
         <button @click=goToMenu class="h-full flex flex-col items-center justify-center text-xs outline">
          <svg class="" width="82" height="24" viewBox="0 0 82 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="3.5" x2="63.5211" y2="3.5" stroke="white" stroke-width="6"/>
            <line x1="18.479" y1="19.7773" x2="82.0001" y2="19.7773" stroke="white" stroke-width="6"/>
          </svg>
          <div class="h-1/2 w-auto flex justify-center items-center m-2">
            <div class=" text-harhuy uppercase font-extrabold tracking-wide rotate w-full align-buttom text-center m-0"> menú</div>
          </div>
        </button>
      </div>
    </div>

    <!-- middle zone -->
    <div class="w-large h-full">
      <div class="w-full h-2/4 flex justify-center items-center">
      <svg @click=goToIndex class=" logo w-full h-3/4 pl-36" viewBox="0 0 218 117"  xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4909 45.5911H10.9687V0.0444394H0.802018V99H10.9687V48.3022H22.4909V99H32.6576V0.0444394H22.4909V45.5911ZM49.1022 100.356C43.951 100.356 41.2399 97.2378 41.2399 90.7311V81.3778C41.2399 70.3978 46.9333 66.06 57.6422 56.0289V30.9511C57.6422 26.6133 56.5577 25.5289 52.0844 25.5289C45.0355 25.5289 43.2733 28.5111 43.2733 33.2556C43.2733 38.9489 45.5777 43.9644 56.6933 55.2156H43.6799C40.9688 48.7089 40.1555 40.9822 40.1555 34.7467C40.1555 26.2067 46.7977 16.3111 55.3377 16.3111C63.1999 16.3111 67.131 20.5133 67.131 27.4267V83.0044C67.131 90.3244 68.4866 91.1378 69.9777 91.1378C71.1977 91.1378 72.1466 90.3244 72.2822 85.8511L72.6888 62.1289H74.5866L74.9933 85.3089C75.1288 93.8489 73.7733 100.356 67.4022 100.356C61.8444 100.356 59.4044 96.4244 61.031 77.1756L59.6755 76.9044C57.6422 97.1022 54.2533 100.356 49.1022 100.356ZM53.0333 90.46C56.0155 90.46 57.6422 82.1911 57.6422 69.72V58.8756C51.6777 64.5689 50.7288 67.9578 50.7288 73.6511V87.2067C50.7288 89.6467 51.6777 90.46 53.0333 90.46ZM100.352 26.3422C96.0139 26.3422 91.2695 33.5267 91.2695 47.2178V99H81.7806V17.6667H91.1339V19.1578L88.1517 39.7622L89.5072 40.0333C92.3539 19.7 95.7428 16.3111 100.352 16.3111C104.418 16.3111 106.452 20.7844 106.452 29.7311C106.452 33.2556 106.045 42.3378 103.741 54.4022H93.4384C101.165 38.1356 104.012 32.3067 104.012 29.8667C104.012 27.4267 102.792 26.3422 100.352 26.3422ZM122.008 0.0444394V19.1578L118.754 39.7622L120.11 40.0333C122.957 19.7 127.566 16.3111 132.717 16.3111C137.732 16.3111 141.392 20.5133 141.392 27.2911V99H131.903V32.5778C131.903 27.6978 131.226 25.5289 128.65 25.5289C124.854 25.5289 122.008 34.8822 122.008 47.6244V99H112.519V0.0444394H122.008ZM170.267 99V97.5089L173.52 76.9044L172.164 76.6333C169.318 96.9667 164.709 100.356 159.558 100.356C154.542 100.356 150.882 96.1533 150.882 89.3756V17.6667H160.371V84.0889C160.371 88.9689 161.049 91.1378 163.624 91.1378C167.42 91.1378 170.267 81.7844 170.267 69.1778V17.6667H179.755V99H170.267ZM203.072 74.7356H201.581L198.599 47.6244L194.125 17.6667H183.823L197.243 87.8844H201.174L187.212 116.622H198.87L217.848 17.6667H206.732L203.072 74.7356Z" fill="#F4D116"/>
      </svg>
      </div>
      <div class="w-full h-2/4 flex flex-col justify-center items-center text-white">
        <div class="w-full h-2/4 uppercase font-extrabold text-5xl flex justify-center items-center pl-36">{{ $route.name }}</div>
        <div class="w-full h-2/4 uppercase flex justify-end"> nº / 0424 </div>
      </div>
    </div>
    <!-- end of middle zone -->

    <!-- right zone -->
    <div class="w-96 h-full flex flex-col items-center">
      <div class="w-full h-2/4 flex items-center justify-evenly">
      <router-link to="/store" class="p-2 uppercase text-harhuy">Tienda</router-link>
      <StoreBadge> </StoreBadge>
      </div>
      <!-- end of first right zone -->
    </div>
   <!-- end of full right zone -->
  </div>
</template>

<script>
import StoreBadge from "@/components/StoreBadge/StoreBadge.vue";

export default {
  name: "TopBar",
  components: {
    StoreBadge,
  },
  methods: {
    goToMenu () {
      this.$router.push("/menu");
    },
    goToIndex () {
      this.$router.push("/");
    },
  },

};
</script>

<style scoped>
  .rotate {
    transform: rotate(270deg);
  }

  .outline {
    outline: 0;
  }

.logo:hover {
  cursor: pointer;
}
</style>
