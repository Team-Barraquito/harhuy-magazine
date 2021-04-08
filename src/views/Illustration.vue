<template>
  <div class="illustration w-screen h-screen">
    <TopBar> </TopBar>
    <div class="content flex mt-6">
      <div class="side-container w-36">
        <SideMenu> </SideMenu>
      </div>
      <div class="container flex justify-between pr-20 pl-20">
        <div class="column w-96 h-full bg-red-500 grid gap-3 justify-items-center">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="column w-96 h-full bg-red-500 grid gap-12 justify-items-center pt-14">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="column w-96 h-full bg-red-500 grid gap-3 justify-items-center">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import { mapState } from "vuex";

export default {
  name: "Illustration",
  components: {
    TopBar,
    SideMenu,
  },
  computed: {
    ...mapState(["illustrationArtists"]),
  },

};
</script>

<style scoped>

.column {
  grid-template-rows: repeat(3, 350px);

}
.item {
  width: 350px;
  height: 350px;
  background: green;
}

</style>
