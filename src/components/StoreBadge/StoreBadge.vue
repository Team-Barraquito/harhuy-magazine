<template>
  <router-link to="/cart" class="flex justify-center items-center">
    <div class="relative">
      <svg width="66" height="54" viewBox="0 0 66 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L20.3208 15.1849M20.3208 15.1849L65 9.18357L58.9623 34.8254H20.3208V15.1849ZM50.5094 42.4634C48.0496 38.0962 39.0825 38.0962 36.6226 42.4634C34.7275 45.8281 36.0321 49.8363 39.6415 51.7381C42.2895 53.1333 44.8426 53.1333 47.4906 51.7381C51.0999 49.8363 52.4046 45.8281 50.5094 42.4634ZM20.3208 42.4634C22.7557 40.7809 25.7349 40.7809 28.1698 42.4634C31.3539 44.6636 31.3539 49.5379 28.1698 51.7381C25.7349 53.4206 22.7557 53.4206 20.3208 51.7381C17.1367 49.5379 17.1367 44.6636 20.3208 42.4634Z" stroke="white"/>
      </svg>
      <span v-if="numberOfCartItems > 0" class="absolute top-0 -right-1 text-black  font-bold w-5 h-5 bg-harhuy rounded-full flex justify-center items-center"> {{ numberOfCartItems }} </span>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StoreBadge",
  computed: {
    ...mapGetters(["numberOfCartItems"]),
  },
};
</script>

<style>

</style>
