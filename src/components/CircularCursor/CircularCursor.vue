<template>
<div role="none" class="h-12 w-12 bg-white absolute rounded-full init"></div>
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
