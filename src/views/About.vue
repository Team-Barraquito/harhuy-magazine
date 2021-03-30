<template>
  <div class="about">
    <h1>This is an about page</h1>
    <OpenCloseButton> </OpenCloseButton>
  </div>
</template>

<script>
import OpenCloseButton from "@/components/OpenCloseButton.vue";

export default {
  name: "About",
  components: {
    OpenCloseButton,
  },
};
</script>
