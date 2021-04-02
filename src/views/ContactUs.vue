<template>
<div class="contact">
  <TopBar> </TopBar>
  <div class= "flex flex-column bg-black">
  <SideMenu> </SideMenu>
    <div class="flex flex-column bg-black">
      <div class="flex flex-row">
        <div class="w-2/4 mr-24 bg-black">
          <h1 class="uppercase font-black text-right text-6xl text-white mt-5"> Contacta con
            nosotros <br> </h1>
          <p class="text-right text-white"> Esto es un ejemplo <br>
          de como se veria nuestra pagina web <br>
          espero que se vea bastante bien <br>
          sino, voy a llorar demasiado <br>
          </p>
        </div>
        <div class="w-full max-w-xs">
          <form action="/" class="bg-black pt-6">
            <div class="mb-4">
              <label for="name"> </label>
              <input type="text" placeholder="Nombre" class="shadow appareance-none text-xs border border-white bg-black rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-grey-50" id="name">
            </div>
            <div class="mb-4">
              <label for="tel" > </label>
              <input type="tel" placeholder="Teléfono" class="shadow appareance-none text-xs border border-white bg-black rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="tel">
            </div>
            <div class="mb-4">
              <label for="email"></label>
              <input type="text" placeholder="Correo Electrónico" class="shadow text-xs appareance-none border border-white bg-black rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username">
            </div>
            <div class="mb-4">
              <label for="message"></label>
              <p> <textarea name="mensaje" placeholder="Escriba su mensaje" class="block text-white font-bold mb-2 text-white text-xs w-full h-24 border border-white bg-black rounded-xl py-2 px-3" id="message"></textarea></p>
            </div>
            <div class="flex justify-center">
              <input type="checkbox" id="terms" name="terms">
              <label for="" class="text-white text-xss ml-2">By subscribing, you agree to our Terms of Use and Privaciy Policy</label>
            </div>
            <div class="mt-3 w-4/12 h-4/12">
              <button type="submit" id="submit">
                  <svg height="46.96" width="60.08" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="m55.132 28.68-.022-.023-18.306 18.306-4.95-4.95L46.868 27H0v-7h46.453L31.403 4.95 36.352 0l23.73 23.73-4.95 4.95z" fill="#fff"/>
                  </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "ContactUs",
  components: {
    TopBar,
    SideMenu,
  },
};
</script>

<style scoped>
  button {
    outline: 0;
  }
</style>
