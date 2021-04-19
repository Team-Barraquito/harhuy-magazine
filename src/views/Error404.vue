<template>
<div class="error h-screen">
      <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex bg-harhuy">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

    <div class="flex items-start justify-center w-full text-left text-black">
      <div class="pt-48 -ml-20">
        <p class="text-5xl font-extrabold text-right">Fck*!</p>
        <p class="text-2xl">/ ERROR 404 /</p>
      </div>
      <img src="../assets/images/error404/grave.svg"/>
      <div class="error pt-52 text-lg">
        <p>¡Lo sentimos! La página que estás</p>
        <p>buscando no existe</p>
      </div>
      </div>
    </div>
  <div class="footer-container"> <Footer> </Footer> </div>
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
