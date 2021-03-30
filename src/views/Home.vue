<template>
  <div class="home">
    <StoreItem v-for="(item, index) of this.items" :key="index" :item="item" >  </StoreItem>
  </div>
</template>

<script>

// @ is an alias to /src
import StoreItem from "@/components/StoreItem.vue";

export default {
  name: "Home",
  components: {
    StoreItem,
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
