<template>
<div class="error h-screen">
  <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen h-4.5/6  flex bg-harhuy">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

    <div class="flex items-center justify-center w-full text-right text-black">
      <div>
        <p class="text-3xl font-extrabold">ERROR</p>
        <p class="text-3xl font-extrabold">DE COMPRA</p>
      <p class ="text-left text-black text-1xl">Ha habido un error en el</p>
      <p>proceso de compra</p>
      </div>
      <img src="../assets/images/denied/denied.svg"/>
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
  name: "Denied",
  components: {
    TopBar,
    SideMenu,
    Footer,
  },
};
</script>

<style scoped>

</style>
