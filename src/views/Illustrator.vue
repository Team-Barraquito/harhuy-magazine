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
        <div class="image-and-text flex w-9/12 h-full my-5 justify-center items-center">

          <!-- image -->
          <div class="h-80 w-1/2 image flex justify-center items-center bg-gray-600">
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
    <div class="footer-container">
      <Footer> </Footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Illustrator",
  components: {
    TopBar,
    SideMenu,
    Carousel3d,
    Slide,
    Footer,
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
