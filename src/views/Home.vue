<template>
  <div class="home overflow-hidden">
    <div class="h-screen bg-image bg-center bg-no-repeat bg-cover bg-fixed overflow-hidden">
      <TopBarTransparent> </TopBarTransparent>
      <div class="flex w-screen h-screen overflow-x-hidden overflow-y-hidden">
        <div class="nav-container">
          <SideMenu> </SideMenu>
        </div>
        <div class=" flex flex-col items-end justify-center w-screen overflow-x-hidden overflow-y-hidden tablet:-mt-8 laptop:-mt-0">
          <div class="content flex flex-col items-end justify-center w-6/12 px-8 text-black tablet:w-full laptop:w-4.5/6 xl:w-4.5/6 xxl:w-1/2">
            <p class="text-right tablet:text-sm laptop:text-base desktop:text-lg">Nº / 001</p>
            <h1 class="text-6xl font-bold text-right tablet:text-5xl laptop:text-6xl">GIGI <br> RELLS </h1>
            <p class="text-right tablet:text-xxs laptop:text-xs desktop:text-base">Lorem ipsum dolor sit amet,
              consectetur <br> adipiscing elit,
              sed do eiusmod tempor <br> incididunt
              ut labore et dolore magna aliqua. </p>
            <div class="flex flex-col items-start w-full py-6">
              <div class="border-t-4 border-harhuy w-full py-1"></div>
              <p class="text-sm text-black py-1 tablet:text-tiny laptop:text-base">Leer entrevista completa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBarTransparent from "@/components/TopBarTransparent/TopBarTransparent.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default {
  name: "Home",
  components: {
    TopBarTransparent,
    SideMenu,
  },
};

</script>

<style scoped>
.bg-image {
  background-image: url(../../public/index/home-bg-image.jpg);

}
</style>
