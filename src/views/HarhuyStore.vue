<template>
  <div class="store">
    <TopBar> </TopBar>
    <div class="container flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="content flex flex-col">
        <StoreFeaturedItem> </StoreFeaturedItem>
        <div class="grid grid-rows-2 grid-cols-3">
          <StoreItem v-for="(item, index) in items" :key="index" :item="item"> </StoreItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideMenu from "@/components/SideMenu.vue";
import StoreItem from "@/components/StoreItem.vue";
import StoreFeaturedItem from "@/components/StoreFeaturedItem.vue";

export default {
  name: "HarhuyStore",
  components: {
    TopBar,
    SideMenu,
    StoreFeaturedItem,
    StoreItem,
  },
  computed: {
    items () {
      return this.$store.state.items;
    },
  },
};

</script>

<style scoped>

</style>
