<template>
  <div class="store">
    <TopBar> </TopBar>
    <SideMenu> </SideMenu>
    <StoreItem v-for="(item, index) of this.items" :key="index" :item="item" > </StoreItem>
  </div>
</template>

<script>
import StoreItem from "@/components/StoreItem.vue";
import TopBar from "@/components/TopBar.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "HarhuyStore",
  components: {
    StoreItem,
    TopBar,
    SideMenu,
  },

  data () {
    return {
      items: [],
    };
  },

  methods: {
    setItems () {
      const storeItems = require("../assets/database/store-items.json");
      this.items = storeItems.items;
    },
  },

  mounted () {
    this.setItems();
  },
};

</script>

<style scoped>

</style>
