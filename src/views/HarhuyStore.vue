<template>
  <div class="store">
    <TopBar> </TopBar>
    <div class="container flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="content flex flex-col">
        <StoreFeaturedItem> </StoreFeaturedItem>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideMenu from "@/components/SideMenu.vue";
// Import StoreItem from "@/components/StoreItem.vue";
import StoreFeaturedItem from "@/components/StoreFeaturedItem.vue";

export default {
  name: "HarhuyStore",
  components: {
    TopBar,
    SideMenu,
    StoreFeaturedItem,
  },
};

</script>

<style scoped>

</style>
