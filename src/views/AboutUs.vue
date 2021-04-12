<template>
  <div class="aboutUs">
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="flex items-center justify-center w-full text-right">
        <div class="w-1/4 h-full p-3">
          <h1 class="text-6xl font-bold"> DÓNDE <br/> NACE <br /> HARHUY </h1>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus incidunt perferendis officiis aliquam dolor vero
            fugit labore saepe dignissimos reprehenderit facere quae, ea
            natus corporis, aliquid aperiam quia nulla autem?</p>
          <img src="../assets/images/aboutUs/about-us1.jpg"/>
        </div>

      <div class="w-1/4 h-full text-left p-3 sm:text-left w-25 .md:h-32">
        <img src="../assets/images/aboutUs/about-us2.jpg"/> <br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus incidunt perferendis officiis aliquam dolor vero
          fugit labore saepe dignissimos reprehenderit facere quae, ea
          natus corporis, aliquid aperiam quia nulla autem?</p>
          <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus incidunt perferendis officiis aliquam dolor vero
          fugit labore saepe dignissimos reprehenderit facere quae, ea
          natus corporis, aliquid aperiam quia nulla autem?</p>
          <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus incidunt perferendis officiis aliquam dolor vero
          fugit labore saepe dignissimos reprehenderit facere quae, ea
          natus corporis, aliquid aperiam quia nulla autem?</p>
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
