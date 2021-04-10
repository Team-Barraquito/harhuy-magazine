<template>
   <div class="illustration w-screen h-screen">
    <TopBar> </TopBar>
    <div class="content flex mt-6">
      <div class="side-container w-36">
        <SideMenu> </SideMenu>
      </div>
      <div class="flex justify-between pr-20 pl-20">
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
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import ShowcaseArtist from "@/components/ShowcaseArtist/ShowcaseArtist.vue";
import { mapState } from "vuex";

export default {
  name: "Design",
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
    ...mapState(["designArtists"]),
    path () {
      const path = this.$route.path.replace("/", "");
      console.log(path);
      return path;
    },
  },
  methods: {
    setArraysContent () {
      this.firstThree = this.designArtists.slice(0, 3);
      this.secondThree = this.designArtists.slice(3, 6);
      this.thirdThree = this.designArtists.slice(6);
    },
  },
  beforeMount () {
    this.setArraysContent();
  },

};
</script>

<style>

</style>
