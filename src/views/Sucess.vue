<template>
<div class="global">
     <!-- TopBar + SideMenu --->
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
    <!-- End of TopBar + SideMenu -->

    <div class="flex items-center justify-center w-full text-right text-black">
      <div >
        <p class="text-3xl font-extrabold">COMPRA</p>
        <p class="text-3xl font-extrabold">REALIZADA</p>
      <p class ="text-left text-black text-1xl">
        Tu compra se ha realizado</p>
      <p>correctamente</p>
      </div>
      <img src="../assets/images/sucess/sucess.svg"/>
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
