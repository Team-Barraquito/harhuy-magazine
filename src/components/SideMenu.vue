<template>
<div class="w-32 flex flex-col items-center">
  <div class="uppercase">ilustración</div>
  <div class="vertical-line"></div>
  <div class="uppercase">fotografía</div>
  <div class="vertical-line"></div>
  <div class="uppercase">música</div>
  <div class="vertical-line"></div>
  <div class="uppercase">vídeo</div>
  <div class="vertical-line"></div>
  <div class="uppercase">diseño</div>
  <div class="vertical-line last"></div>
</div>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style scoped>
  .vertical-line {
    border-left: 1px solid black;
    height: 50px;
  }

  .last {
    height: 200px;
  }
</style>
