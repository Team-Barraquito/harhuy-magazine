<template>
  <div class="subscription">
    <TopBar> </TopBar>
    <div class="container flex w-screen">
      <SideMenu> </SideMenu>
      <div class="flex justify-center items-center w-70%">
        <PlanCard> </PlanCard>
        <PlanCard> </PlanCard>
        <PlanCard> </PlanCard>
      </div>
    </div>

  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideMenu from "@/components/SideMenu.vue";
import PlanCard from "@/components/PlanCard.vue";
export default {
  name: "SubscriptionPlans",
  components: {
    TopBar,
    SideMenu,
    PlanCard,
  },

};
</script>

<style scoped>

</style>
