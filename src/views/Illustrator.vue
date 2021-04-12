<template>
  <div class="illustrator">
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <!-- content -->
      <div class="content flex flex-col w-full bg-pink-500 justify-center items-center">
        <!-- image, name and text -->
        <div class="image-and-text flex w-11/12 h-3/5 mt-1 mb-1">

          <!-- image -->
          <div class="h-full w-3/12 image flex justify-center items-center">
            <img :src="getFront" :alt=illustrator.name >
          </div>
          <!-- end of image -->

          <!-- name and description -->
          <div class="h-full w-3/5 bg-red-500 flex flex-col justify-start">
            <h1 class="pt-2 pb-2 m-0 text-3xl w-8/12 text-center"> {{illustrator.name}}</h1>
            <p class="text-base w-4/5 h-5/6 m-0 text "> {{illustrator.description}}</p>
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
