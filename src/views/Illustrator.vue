<template>
  <div class="illustrator">
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <!-- content -->
      <div class="content flex flex-col w-screen h-2/5 bg-pink-500 justify-center items-center py-10">
        <!-- image, name and text -->
        <div class="image-and-text flex w-9/12 h-full my-1 justify-center items-center">

          <!-- image -->
          <div class="h-full w-1/2 image flex justify-center items-center bg-gray-600">
            <div class="w-full h-full bg-black object-contain">
              <img :src="getFront" :alt=illustrator.name class="object-cover h-full w-full">
            </div>
          </div>
          <!-- end of image -->

          <!-- name and description -->
          <div class="h-full w-1/2 flex flex-col justify-start p-10">
            <h1 class="pt-2 pb-2 my-2 text-3xl w-full text-center font-bold leading-none"> {{illustrator.name}}</h1>
            <p class="w-full h-full my-5 text-left text-xs leading-4"> {{illustrator.description}}</p>
          </div>
        </div>
        <!-- end of name and description -->

        <div class="slider-container w-9/12 h-2/5 bg-black mt-1 mb-1">
        <!-- Carousel -->
            <div class="w-1/2 h-full bg bg-green-500">
              <carousel :navigationEnabled=carouselData.navigation :perPage=carouselData.pages paginatoinActiveColor="#FFEC02">
                <slide> <img :src="getFront" :alt="illustrator.name" /></slide>
                <slide> <img :src="getSide" :alt="illustrator.name" /> </slide>
                <slide> <img :src="getBack" :alt="illustrator.name"> </slide>
              </carousel>
            </div>
          <!-- End of carousel -->
        </div>
      </div>
      <!-- End of content -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Illustrator",
  components: {
    TopBar,
    SideMenu,
    Carousel,
    Slide,
  },

  data () {
    return {
      illustrator: {},
      carouselData: {
        pages: 1,
        navigation: true,
      },
    };
  },

  computed: {
    ...mapGetters(["illustrators"]),
    getFront () {
      return require("../assets/images/artists/illustration" + this.illustrator.photos.front);
    },
    getSide () {
      return require("../assets/images/artists/illustration" + this.illustrator.photos.side);
    },
    getBack () {
      return require("../assets/images/artists/illustration" + this.illustrator.photos.back);
    },
  },
  methods: {
    getDesigner () {
      this.illustrator = this.illustrators(this.$route.params.name);
    },
  },

  beforeMount () {
    this.getDesigner();
  },
};
</script>

<style scoped>

.text {
  max-width: 50ch;
}

</style>
