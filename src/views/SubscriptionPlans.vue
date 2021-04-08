<template>
  <div class="subscription">
    <TopBar> </TopBar>
    <SideMenu> </SideMenu>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default {
  name: "SubscriptionPlans",
  components: {
    TopBar,
    SideMenu,
  },

};
</script>

<style scoped>

</style>
