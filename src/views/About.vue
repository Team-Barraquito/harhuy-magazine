<template>
  <div class="about">
    <h1>This is an about page</h1>
    <top-bar> </top-bar>
    <quantity-selector> </quantity-selector>
    <side-menu> </side-menu>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: "About",
  components: {
    TopBar,
  },
};
</script>
