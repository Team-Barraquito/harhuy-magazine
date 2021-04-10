<template>
  <div class="store">
    <TopBar> </TopBar>
    <div class=" w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="w-full content flex flex-col flex-wrap items-center justify-content">
        <StoreFeaturedItem> </StoreFeaturedItem>
        <div class="grid grid-rows-2 grid-cols-3 gap-4">
          <StoreItem v-for="(item, index) in items" :key="index" :item="item"> </StoreItem>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <Footer> </Footer>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import StoreItem from "@/components/StoreItem/StoreItem.vue";
import StoreFeaturedItem from "@/components/StoreFeaturedItem/StoreFeaturedItem.vue";
import Footer from "@/components/Footer/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "HarhuyStore",
  components: {
    TopBar,
    SideMenu,
    StoreFeaturedItem,
    StoreItem,
    Footer,
  },
  computed: {
    ...mapState(["items"]),
  },
};

</script>

<style scoped>

</style>
