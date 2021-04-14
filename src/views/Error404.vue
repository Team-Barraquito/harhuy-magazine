<template>
<div class="global bg-harhuy h-screen">
      <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

    <div class="flex items-center justify-center w-full h-5/6 text-left text-black">
        <div >
        <p class="text-3xl font-extrabold text-right">Fck*!</p>
      <p>/ ERROR 404 /</p>
      </div>
      <img src="../assets/images/error404/grave.svg"/>
      <div class="error">
        <p>The page you're looking for</p>
        <p>is now beyond our reach</p>
      </div>
    </div>
  </div>
  <div class="footer-container h-1/6"> <Footer> </Footer> </div>
</div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Error404",
  components: {
    TopBar,
    SideMenu,
    Footer,
  },
};
</script>

<style scoped>

</style>
