<template>
<div role="none" class="h-10 w-10 bg-white absolute rounded-full init"></div>
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
