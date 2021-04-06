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
          <form class="bg-black pt-6" @submit.prevent="sendAndReset">
            <div class="mb-4">
              <label for="name"> </label>
              <input type="text" placeholder="Nombre" v-model = "name" class="shadow appareance-none text-xs border border-white bg-black rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-grey-50" name="user_name" required>
            </div>
            <div class="mb-4">
              <label for="tel" > </label>
              <input type="tel" placeholder="Teléfono" v-model = "pho" class="shadow appareance-none text-xs border border-white bg-black rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="user_pho">
            </div>
            <div class="mb-4">
              <label for="email"></label>
              <input type="text" placeholder="Correo Electrónico" v-model = "email" class="shadow text-xs appareance-none border border-white bg-black rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="user_email" required>
            </div>
            <div class="mb-4">
              <label for="message"></label>
              <p> <textarea name="user_message" placeholder="Escriba su mensaje" v-model = "message" class="block text-white font-bold mb-2 text-white text-xs w-full h-24 border border-white bg-black rounded-xl py-2 px-3" required></textarea></p>
            </div>
            <div class="flex justify-center">
              <input type="checkbox" id="terms" name="terms" required>
              <label for="" class="text-white text-xss ml-2">By subscribing, you agree to our Terms of Use and Privaciy Policy</label>
            </div>
            <div class="mt-3 w-4/12 h-4/12">
              <div>
                <VueRecaptcha sitekey ="6LeEBJsaAAAAAIGOz44t3i4HgBHk3ASI__atgfvd" :loadRecaptchaScript="true" />
              </div>
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
import emailjs from "emailjs-com";
import VueRecaptcha from "vue-recaptcha";

export default {
  data () {
    return {
      name: "",
      pho: "",
      email: "",
      message: "",
    };
  },
  name: "ContactUs",
  components: {
    TopBar,
    SideMenu,
    VueRecaptcha,
  },
  methods: {
    resetInput () {
      this.name = "";
      this.pho = "";
      this.email = "";
      this.message = "";
    },
    sendEmail: (e) => { // Ahora, e.target funcionaría
      emailjs
        .sendForm(
          "service_u2mtyo9", // Service_ID
          "template_q57wtp3", // TEMPLATE_ID
          e.target,
          "user_TDfy9kT2AvP7k4H3VwTOC", // USER_ID
        )
        .then(
          () => {
            alert("¡Enviado! recibirá una respuesta por nuestra parte");
          },
          (error) => {
            alert("NO ENVIADO", error);
          },
        );
    },
    sendAndReset (e) { // Le pasamos e
      this.sendEmail(e); // Enviamos e
      this.resetInput();
    },
  },
};

</script>

<style scoped>
  button {
    outline: 0;
  }
</style>
