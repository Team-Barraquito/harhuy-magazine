<template>
<div role="none" class="h-0 w-0 bg-white absolute rounded-full init xl:w-14 xl:h-14"></div>
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
