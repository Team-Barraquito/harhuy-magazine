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

        <div class="slider-container w-9/12 h-2/5 bg-black mt-1 mb-1 flex">
          <div class="w-1/2 h-full bg bg-blue-500 overflow-hidden"> </div>
            <!-- Carousel -->
            <div class="w-1/2 h-full overflow-hidden">
              <Carousel3d :controlsVisible=visibility :controlsWidth=controlsWidth :controlsHeight=controlsHeight>
                <Slide :index=i><img :src="getFront" :alt="illustrator.name"></Slide>
                <Slide :index=i2><img :src="getSide" :alt="illustrator.name"></Slide>
                <Slide :index=i3><img :src="getBack" :alt="illustrator.name"></Slide>
              </Carousel3d>
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
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Illustrator",
  components: {
    TopBar,
    SideMenu,
    Carousel3d,
    Slide,
  },

  data () {
    return {
      illustrator: {},
      i: 0,
      i2: 1,
      i3: 2,
      visibility: true,
      controlsWidth: 25,
      controlsHeight: 25,
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

img {
  object-fit: cover;
}

.text {
  max-width: 50ch;
}

</style>
