<template>
  <div class="illustration overflow-x-hidden">
    <TopBar> </TopBar>
    <div class="w-screen flex overflow-x-hidden">
      <div class="nav-container overflow-x-hidden">
        <SideMenu> </SideMenu>
      </div>
      <!-- End of top side -->
        <div class="tablet:w-full tablet:flex tablet:flex-col tablet:mt-8 tablet:items-center desktop:justify-evenly desktop:flex-row desktop:items-start desktop:px-2 xl:px-4">
          <div class="column tablet:w-90 tablet:h-full grid gap-3 laptop:w-96 desktop:w-64 desktop:h-64  justify-items-center xl:w-90 xl:h-full xxl:w-96">
            <ShowcaseArtist v-for="(artist,index) in firstThree" :key="index" :artistData=artist :path="path"/>
          </div>
          <div class="column tablet:w-90 tablet:h-full grid gap-12 laptop:w-96  desktop:w-64 desktop:h-64 justify-items-center tablet:pt-2 tablet:gap-10 desktop:pt-8 xl:w-90 xl:h-full xl:gap-12 xl:pt-14 xxl:w-96">
            <ShowcaseArtist v-for="(artist,index) in secondThree" :key="index" :artistData=artist :path="path"/>
          </div>
          <div class="column tablet:w-90 tablet:h-full grid gap-3 laptop:w-96 desktop:w-64 desktop:h-64  justify-items-center xl:w-90 xl:h-full xxl:w-96">
           <ShowcaseArtist v-for="(artist,index) in thirdThree" :key="index" :artistData=artist :path="path"/>
          </div>
       </div>
    </div>
    <div class="footer-container overflow-x-hidden">
      <Footer> </Footer>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import ShowcaseArtist from "@/components/ShowcaseArtist/ShowcaseArtist.vue";
import { mapState } from "vuex";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Illustration",
  data () {
    return {
      firstThree: [],
      secondThree: [],
      thirdThree: [],
    };
  },
  components: {
    TopBar,
    SideMenu,
    ShowcaseArtist,
    Footer,
  },
  computed: {
    ...mapState(["illustrationArtists"]),
    path () {
      const path = this.$route.path.replace("/", "");
      return path;
    },
  },
  methods: {
    setArraysContent () {
      this.firstThree = this.illustrationArtists.slice(0, 3);
      this.secondThree = this.illustrationArtists.slice(3, 6);
      this.thirdThree = this.illustrationArtists.slice(6);
    },
  },
  beforeMount () {
    this.setArraysContent();
  },
};
</script>

<style scoped>

.column {
  grid-template-rows: repeat(3);

}

</style>
