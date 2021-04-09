<template>
<div :style="{'color': color}" class="w-32 flex flex-col items-center m-10 ">
  <router-link to="/illustration" class="uppercase text-xs p-2"> ilustración</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/photography" class="uppercase text-xs p-2"> fotografía</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/music" class="uppercase text-xs p-2"> música</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/video" class="uppercase text-xs p-2"> vídeo</router-link>
  <div class="vertical-line" :style="{'border-left': `1px solid ${color}`}"></div>
  <router-link to="/design" class="uppercase text-xs p-2"> diseño</router-link>
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
