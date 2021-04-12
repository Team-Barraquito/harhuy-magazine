<template>
  <div class="illustration">
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
        <div class="column w-96 h-full grid gap-3 justify-items-center">
        <ShowcaseArtist v-for="(artist,index) in firstThree" :key="index" :artistData=artist :path="path"/>
        </div>
        <div class="column w-96 h-full grid gap-12 justify-items-center pt-14">
          <ShowcaseArtist v-for="(artist,index) in secondThree" :key="index" :artistData=artist :path="path"/>
        </div>
        <div class="column w-96 h-full grid gap-3 justify-items-center">
          <ShowcaseArtist v-for="(artist,index) in thirdThree" :key="index" :artistData=artist :path="path"/>
        </div>
      </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import ShowcaseArtist from "@/components/ShowcaseArtist/ShowcaseArtist.vue";
import { mapState } from "vuex";

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
