<template>
  <div class="home">
    <TopBar> </TopBar>
    <div class="bg-image">
      <div class="container flex w-screen" :style="image">
        <div class="nav-container">
          <SideMenu> </SideMenu>
        </div>

        <div class="content flex flex-col items-end justify-center w-screen">
          <p class="text-right">Nº / 001</p>
          <h1 class="text-6xl font-bold text-right">GIGI <br> RELLS </h1>
          <p class="text-right">Lorem ipsum dolor sit amet,
            consectetur <br> adipiscing elit,
            sed do eiusmod tempor <br> incididunt
            ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    SideMenu,
  },
  data () {
    return {
      backgroundImg: {
        backgroundImage: "@/assets/images/index/index-background.jpg",
      },
    };
  },
};

</script>

<style scoped>
.bg-image {
  background-image: url ("/assets/images/index/index-background.jpg");
}
</style>
