<template>
  <div class="success h-screen">
    <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex bg-harhuy">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <!-- End of TopBar + SideMenu -->

      <div class="flex items-start justify-center w-full text-right text-black">
        <div class="pt-48 -ml-36">
          <p class="text-5xl font-extrabold">COMPRA</p>
          <p class="text-5xl font-extrabold">REALIZADA</p>
          <p class="text-left text-black text-2xl">Tu compra se ha realizado</p>
          <p class="text-2xl">correctamente</p>
        </div>
        <img class="pt-28 w-100 h-400" src="../assets/images/success/success.svg" />
      </div>
    </div>
    <div class="footer-container"><Footer> </Footer></div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Sucess",
  components: {
    TopBar,
    SideMenu,
    Footer,
  },
};
</script>

<style scoped>
</style>
