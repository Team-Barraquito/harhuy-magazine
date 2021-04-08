<template>
  <div class="subscription">
    <TopBar> </TopBar>
    <div class="flex object-contain">
      <SideMenu> </SideMenu>
      <div class="box-border flex flex-wrap justify-center items-center object-contain overflow-hidden">
        <PlanCard title="Plan Premium Plus" price="14,99€"> </PlanCard>
        <PlanCard title="Plan Plus" price="10,99€"> </PlanCard>
        <PlanCard title="Suscripción Revista" price="8,99€"> </PlanCard>
      </div>
    </div>

  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
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
