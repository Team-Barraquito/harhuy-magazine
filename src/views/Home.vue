<template>
  <div class="home">
    <router-link to="/error404"> Error</router-link>
     <router-link to="/denied"> Denied</router-link>
    <router-link to="/sucess">  Sucess</router-link>
    <div class="bg-image bg-center bg-no-repeat bg-cover bg-fixed">
      <TopBar> </TopBar>
      <div class="flex w-screen">
        <div class="nav-container">
          <SideMenu :color=textColor> </SideMenu>
        </div>
        <div class=" flex flex-col items-end justify-center w-screen">
          <div class="content flex flex-col items-end justify-center w-6/12 px-8 ">
            <p class="text-right">Nº / 001</p>
            <h1 class="text-6xl font-bold text-right">GIGI <br> RELLS </h1>
            <p class="text-right">Lorem ipsum dolor sit amet,
              consectetur <br> adipiscing elit,
              sed do eiusmod tempor <br> incididunt
              ut labore et dolore magna aliqua. </p>
            <div class="flex flex-col items-start w-full py-6">
              <div class="border-t-4 border-harhuy w-full py-1"></div>
              <p class="text-sm text-harhuy py-1">Leer entrevista completa</p>
            </div>
          </div>
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
      textColor: "",
    };
  },
};

</script>

<style scoped>
.bg-image {
  background-image: url(../assets/images/index/home-bg-image.jpg);
}
</style>
