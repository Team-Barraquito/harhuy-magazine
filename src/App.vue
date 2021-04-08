<template>
  <div id="app" class="antialiased">
    <router-view class="w-screen"/>
  </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-stroke-1 {
 -webkit-text-stroke-width: 1px;
}

.text-stroke-2 {
 -webkit-text-stroke-width: 2px;
}

.text-stroke-3 {
 -webkit-text-stroke-width: 3px;
}

.text-stroke-4 {
 -webkit-text-stroke-width: 4px;
}

.text-stroke-5 {
 -webkit-text-stroke-width: 5px;
}

.text-stroke-color-black {
  -webkit-text-stroke-color: black;
}

.text-stroke-color-white{
  -webkit-text-stroke-color: white;
}

@font-face {
  font-family: "Monument Extended";
  src: url(./assets/fonts/MonumentExtended-Regular.woff),
       url(./assets/fonts/MonumentExtended-Regular.woff2),
       url(./assets/fonts/MonumentExtended-Regular.otf);
}

#app {
  font-family: "Monument Extended";
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
