<template>
  <div class="store">
    <TopBar> </TopBar>
    <div class="container flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="content flex flex-col">
      <!-- Aqui nuevo compo -->
        <StoreFeaturedItem :info=info> </StoreFeaturedItem>
        <div class="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-3">
          <StoreItem v-for="(item, index) in items" :key=index :item=item > </StoreItem>
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

  data () {
    return {
      items: [],
      info: {},
    };
  },

  methods: {
    // TODO cambiar nombre function
    setItems () {
      /*
       *  This function gets all the store
       *  items and the featured one
       *  depending on the month we are
       */
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December",
      ];
      const monthIndex = new Date().getMonth();
      const currentMonth = months[monthIndex];
      const storeItems = require("../assets/database/store-items.json");
      this.items = storeItems.items;
      this.info = storeItems.featuredItems[`${currentMonth}`];
    },
  },

  created () {
    this.setItems();
  },
};

</script>

<style scoped>

</style>
