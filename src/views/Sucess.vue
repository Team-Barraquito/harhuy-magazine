<template>
<div class="global">
  <TopBar> </TopBar>
  <div class="flex flex-column bg-yellow-400">
    <SideMenu> </SideMenu>
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
</div>

</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default {
  name: "Sucess",
  components: {
    TopBar,
    SideMenu,
  },
};
</script>

<style scoped>

</style>
