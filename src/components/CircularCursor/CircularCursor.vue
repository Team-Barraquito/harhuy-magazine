<template>
<div class="h-14 w-14 bg-black absolute rounded-full init"></div>
</template>

<script>
export default {
  name: "CircularCursor",

};
</script>

<style scoped>
.init {
  transform: translate(-50%, -50%);
  pointer-events: none;
}

</style>
