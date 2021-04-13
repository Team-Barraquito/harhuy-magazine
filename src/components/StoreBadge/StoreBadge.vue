<template>
  <router-link to="/cart" class="flex justify-center items-center">
    <div class="relative w-10 h-10">
      <svg width="35" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.022 23.863H10.34a.795.795 0 0 1-.78-.64L6.38 7.316a.797.797 0 0 1 .779-.952h27.045a.795.795 0 0 1 .781.952l-3.182 15.909a.798.798 0 0 1-.78.64zm-20.03-1.59H30.37l2.863-14.319H8.13l2.864 14.318z" :fill="color"/>
        <path d="M10.34 23.867a.797.797 0 0 1-.779-.64L5.617 3.51a2.394 2.394 0 0 0-2.34-1.92h-.001l-2.48.004a.796.796 0 0 1 0-1.59L3.273 0h.003c1.89 0 3.53 1.344 3.901 3.198l3.942 19.717a.795.795 0 0 1-.78.952z" :fill="color"/>
        <path d="M34.204 27.042H7.16a2.39 2.39 0 0 1-2.387-2.386A2.39 2.39 0 0 1 7.16 22.27h3.182a.796.796 0 0 1 0 1.59H7.159a.796.796 0 0 0 0 1.591h27.045a.796.796 0 0 1 0 1.591zM12.728 35a3.185 3.185 0 0 1-3.182-3.181 3.185 3.185 0 0 1 3.182-3.182 3.185 3.185 0 0 1 3.181 3.181A3.185 3.185 0 0 1 12.729 35zm0-4.772c-.877 0-1.591.714-1.591 1.59 0 .877.714 1.591 1.59 1.591.877 0 1.592-.714 1.592-1.59 0-.877-.715-1.591-1.591-1.591zM27.045 35a3.185 3.185 0 0 1-3.182-3.181 3.185 3.185 0 0 1 3.182-3.182 3.185 3.185 0 0 1 3.182 3.181A3.185 3.185 0 0 1 27.045 35zm0-4.772c-.877 0-1.59.714-1.59 1.59 0 .877.714 1.591 1.59 1.591.877 0 1.591-.714 1.591-1.59 0-.877-.714-1.591-1.59-1.591z" :fill="color"/>
      </svg>
      <span v-if="numberOfCartItems > 0" class="absolute -top-1 -right-1 text-black  font-bold w-4 h-4 bg-harhuy rounded-full flex justify-center items-center text-sm"> {{ numberOfCartItems }} </span>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StoreBadge",
  props: {
    color: {
      type: String,
      default: "white",
    },
  },
  computed: {
    ...mapGetters(["numberOfCartItems"]),
  },
};
</script>

<style>

</style>
