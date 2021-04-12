<template>
  <div class="subscription">
    <TopBar> </TopBar>
    <div class="flex object-contain">
      <SideMenu> </SideMenu>
      <div class="box-border flex flex-wrap flex-row justify-center items-center overflow-hidden w-full place-items-center">
        <PlanCard title="Plan Premium Plus" price="14,99€" itemid="price_1Ier8jLav5xUnjDzfsDbGlYC" duration="3" class="flex1 w-1/3 transform sm:scale-50 xl:scale-100"> </PlanCard>
        <PlanCard title="Plan Plus" price="10,99€" duration="3" itemid="price_1Ier9wLav5xUnjDz87Dnckbd" class="flex1 w-1/3"> </PlanCard>
        <PlanCard title="Suscripción Revista" price="8,99€" duration="1" itemid="price_1IerGsLav5xUnjDzEtQMwR35" class="flex1 w-1/3"> </PlanCard>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import PlanCard from "@/components/PlanCard/PlanCard.vue";

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
