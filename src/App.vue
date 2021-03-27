<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/menu"> Menu </router-link> |
      <router-link to="/aboutUs"> About Us </router-link> |
      <router-link to="/contactUs"> Contact Us </router-link>
    </div>
    <router-view/>
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
  src: url(./assets/fonts/MonumentExtended-Regular.otf),
       url(./assets/fonts/MonumentExtended-Regular.woff),
       url(./assets/fonts/MonumentExtended-Regular.woff2);
}

#app {
  font-family: "Monument Extended", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
