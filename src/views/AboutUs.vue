<template>
  <div class="aboutUs">
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="flex items-center justify-center w-full text-right w-1/2 m-10">
        <div class="w-1/2 h-full py-10 px-5">
          <h1 class="text-6xl font-bold leading-none"> DÓNDE <br/> NACE <br /> HARHUY </h1>
          <br />
          <p class="text-sm pb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidunt perferendis officiis aliquam dolor vero
            fugit labore saepe dignissimos reprehenderit facere quae, ea
            natus corporis, aliquid aperiam quia nulla autem?</p>
          <div class="contain-cover h-3/4">
            <img class="w-full h-full" src="../assets/images/aboutUs/about-us1.jpg"/>
          </div>
        </div>

        <div class="w-1/2 h-full py-10 px-5 text-left sm:text-left w-25 .md:h-32 text-gray-600">
          <img class="h-1/2 w-full" src="../assets/images/aboutUs/about-us2.jpg"/> <br/>
          <p class="text-xs pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidune dignissimos reprehe, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidunt perferendis imos repreheliquam dolor vero
            fugit labore saepe dignissimos reprehe quae, ea
            natus corporis, aliquid aperiam quia nulla autem?</p>
            <br />
          <p class="text-xs">Perferendis officiis aliquam dolor vero
            fugit labore saepe dignissimos reprehe, ipsum dolor sit amet consectetur adipisicing elit.
            fugit labore saepe  reprehedolor vero
            saepe dignissimos reprehedignissimos perferendis officiis aliquam dolor vero
            fugit labore saepe dignissimos reprehe reprehenderit facere quae, ea
            natus corporis, aliquid aperiam quia nulla autem?</p>
            <br />
          <p class="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidunt perferendis officiis aliquam dolor vero
            fugit labore saepe dignissimos e dignissimos reprehe, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidunt perferendis  facere quae, ea
            natus corporis, aliquid aperiam quia nulla autem?</p>
            <br />
          <p class="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidunt perferendis officiis aliquam dolor vero
            fugit labore saepe dignissimos e dignissimos reprehe, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus inc facere quae, eanatus corporis, aliquid aperiam quia nulla autem?</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
export default {
  name: "AboutUs",
  components: {
    TopBar,
    SideMenu,
  },
};
</script>

<style scoped>

</style>
