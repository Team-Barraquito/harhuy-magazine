<template>
  <div class="home">
    <TopBar> </TopBar>
    <SideMenu> </SideMenu>
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
};
</script>

<style scoped>

</style>
