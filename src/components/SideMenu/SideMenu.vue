<template>
<div :style="{'color': color}" class="w-32 flex flex-col items-center ml-2 mr-2">
  <router-link to="/illustration" class="uppercase"> ilustración</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/photography" class="uppercase"> fotografía</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/music" class="uppercase"> música</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/video" class="uppercase"> vídeo</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/design" class="uppercase"> diseño</router-link>
  <div class="vertical-line last" :style="{'border-left': `1px solid ${color}`}"></div>
</div>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    color: {
      type: String,
      default: "black",
    },
  },
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
