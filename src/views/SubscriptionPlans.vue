<template>
 <div class="illustration overflow-x-hidden">
    <TopBar> </TopBar>
    <div class="w-screen flex overflow-x-hidden">
      <div class="nav-container overflow-x-hidden">
        <SideMenu> </SideMenu>
      </div>

      <div class="box-border flex flex-wrap items-start overflow-hidden w-full">
        <PlanCard title="Plan Premium Plus" price="14,99€" itemid="price_1Ier8jLav5xUnjDzfsDbGlYC" duration="3"> </PlanCard>
        <PlanCard title="Plan Plus" price="10,99€" duration="3" itemid="price_1Ier9wLav5xUnjDz87Dnckbd"> </PlanCard>
        <PlanCard title="Suscripción Revista" price="8,99€" duration="1" itemid="price_1IerGsLav5xUnjDzEtQMwR35"> </PlanCard>
      </div>
    </div>
    <div class="footer-container"> <Footer> </Footer> </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import PlanCard from "@/components/PlanCard/PlanCard.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "SubscriptionPlans",
  components: {
    TopBar,
    SideMenu,
    PlanCard,
    Footer,
  },

};
</script>

<style lang="postcss" scoped>
</style>
