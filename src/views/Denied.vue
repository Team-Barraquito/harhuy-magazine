<template>
<div class="global">
  <TopBar> </TopBar>
  <div class="flex flex-column bg-yellow-400">
    <SideMenu> </SideMenu>
    <div class="flex items-center justify-center w-full text-right text-black">
      <div >
        <p class="text-3xl font-extrabold">ERROR</p>
        <p class="text-3xl font-extrabold">DE COMPRA</p>
      <p class ="text-left text-black text-1xl">Ha habido un error en el</p>
      <p>proceso de compra</p>
      </div>
      <img src="../assets/images/denied/denied.svg"/>
    </div>
  </div>
</div>

</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default {
  name: "Denied",
  components: {
    TopBar,
    SideMenu,
  },
};
</script>

<style scoped>

</style>
