<template>
<div class="global">
  <TopBar> </TopBar>
  <div class="flex flex-column bg-yellow-400">
    <SideMenu> </SideMenu>
    <div class="flex items-center justify-center w-full text-left">
      <div>
        <p>Fck*!</p>
        <p>/ ERROR 404/</p>
      </div>
      <img src="" />
      <div class="error">
        <p>The page you're looking</p>
        <p>for is now beyond our</p>
        <p>Let's get you</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default {
  name: "Error404",
  components: {
    TopBar,
    SideMenu,
  },
};
</script>

<style scoped>

</style>
