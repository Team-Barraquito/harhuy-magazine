<template>
<div class="w-32 flex flex-col items-center ml-2 mr-2">
  <router-link to="/ilustracion" class="uppercase"> ilustración</router-link>
  <div class="vertical-line"></div>
  <router-link to="/ilustracion" class="uppercase"> fotografía</router-link>
  <div class="vertical-line"></div>
  <router-link to="/ilustracion" class="uppercase"> música</router-link>
  <div class="vertical-line"></div>
  <router-link to="/ilustracion" class="uppercase"> vídeo</router-link>
  <div class="vertical-line"></div>
  <router-link to="/ilustracion" class="uppercase"> diseño</router-link>
  <div class="vertical-line last"></div>
</div>
</template>

<script>
// TODO  Añadir PROP para que se ajuste el color a la pagina
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
