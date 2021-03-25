<template>
  <div class="about">
    <h1>This is an about page</h1>
    <quantity-selector> </quantity-selector>
    <side-menu> </side-menu>
  </div>
</template>

<script>
import QuantitySelector from "@/components/QuantitySelector.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "About",
  components: {
    QuantitySelector,
    SideMenu,
  },
};
</script>
