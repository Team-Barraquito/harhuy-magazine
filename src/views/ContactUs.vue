<template>
<div>
  <div class="flex flex-column">
  <div class="flex flex-row">
    <div class="w-auto mr-32">
      <h1 class="uppercase font-black text-right text-6xl text-white whitespace-pre-line"> Contacta con
        nosotros </h1>
      <p class="whitespace-pre-line text-right text-white"> Esto es un ejemplo
      de como se veria nuestra pagina web
      espero que se vea bastante bien
      sino, voy a llorar demasiado
      </p>
   </div>
     <div class="w-full max-w-xs">
       <form action="/" class="bg-black pt-6">
         <div class="mb-4">
           <label for="" class="block text-grey-700 text-sm font-bold mb-2 text-white">Nombre</label>
           <input type="text" class="shadow appareance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username">
         </div>
         
         <div class="mb-4">
           <label for="" class="block text-grey-700 text-sm font-bold mb-2 text-white">Numero de teléfono</label>
           <input type="tel" class="shadow appareance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username">
         </div>
    
         <div class="mb-4">
           <label for="" class="block text-grey-700 text-sm font-bold mb-2 text-white">Correo Electronico</label>
           <input type="text" class="shadow appareance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username">
         </div>
         
         <div class="mb-4">
           <label for="" class="block text-grey-700 text-sm font-bold mb-2 text-white">Mensaje</label>
           <p> <textarea name="mensaje" class="block text-grey-700 text-sm font-bold mb-2 text-gray w-full border rounded-xl"></textarea></p>
         </div>
    
         <div class="flex justify-center">
           <input type="checkbox" id="terms" name="terms">
           <label for="" class="text-white text-xs ml-2">By subscribing, you agree to our Terms of Use and Privaciy Policy</label>
         </div>    
       </form>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>

</style>