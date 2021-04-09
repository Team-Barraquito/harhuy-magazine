<template>
  <div class="store">
    <TopBar> </TopBar>
    <div class="container w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="content flex flex-col items-end ">
        <StoreFeaturedItem> </StoreFeaturedItem>
        <div class="grid grid-rows-2 grid-cols-3 gap-4">
          <StoreItem v-for="(item, index) in items" :key="index" :item="item"> </StoreItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import StoreItem from "@/components/StoreItem/StoreItem.vue";
import StoreFeaturedItem from "@/components/StoreFeaturedItem/StoreFeaturedItem.vue";
import { mapState } from "vuex";

export default {
  name: "HarhuyStore",
  components: {
    TopBar,
    SideMenu,
    StoreFeaturedItem,
    StoreItem,
  },
  computed: {
    ...mapState(["items"]),
  },
};

</script>

<style scoped>

</style>
