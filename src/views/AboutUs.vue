<template>
  <div class="aboutUs">
    <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <div class="flex items-center justify-center  text-right m-10">
        <div class="w-1/2 h-full py-10 px-5">
          <h1 class="text-6xl font-bold leading-none"> DÓNDE <br/> NACE <br /> HARHUY </h1>
          <br />
          <p class="text-base pb-5">A ti isleño, ¿Cuántas veces has oido la frase “para triunfar hay que salir de las islas”? Muchos hemos sido testigo de esa matraquilla desde que somos pequeños y durante los años de formación, cuando más dudamos de nuestro futuro.</p>
          <div class="contain-cover h-3/4">
            <img class="w-full h-full" src="../assets/images/aboutUs/about-us1.jpg"/>
          </div>
        </div>

        <div class="w-1/2 h-full py-10 px-5 text-left sm:text-left w-25 text-sm text-gray-600">
          <img class="h-1/2 w-full" src="../assets/images/aboutUs/about-us2.jpg"/> <br/>
          <p >Desde Harhuy queremos romper ese mito, queremos acabar con el estigma y dar valor a todo el talento joven
              que ha ido surgiendo durante todos estos años en Canarias.
              Queremos ser un escaparate y una ventanita para todos estos artistas que tanto
              luchan por romper la burbujita isleña. </p>
            <br />
          <p>Nosotros somos Jose, Ricardo, Sergio e Irina, un grupo multidisciplinar de jóvenes
             que ha decidido emprender un proyecto cultural por el puro amor al arte.
              Harhuy nació en 2018 en Tenerife, España,
              en el equipo nos conocemos desde hace mucho tiempo.
              Al crecer en Tenerife, fue natural para ellos aplicar su espíritu isleño a cada proyecto que emprenden. </p>
            <br />

          <p >Respeto, compasión y mentalidad abierta es lo que nos define y lo que impulsa una actitud trabajadora.
              La calidad de su trabajo es el resultado directo de abordar cada proyecto con
              estos valores primero.
              Crecemos junto con la marca y permitimos que la marca crezca a través de nuestro trabajo. </p>
            <br />
          <p>Damos voz a profesionales que comprenden y comparten el amor al la cultura
            y cuya colaboración y participación solo explorará las infinitas posibilidades
            del proyecto. Nos encanta lo que hacemos. No buscamos el éxito económico,
            sino más bien brindar el enfoque más inclusivo y amable para cada artista. </p>
        </div>
      </div>
    </div>
    <div class="footer-container"><Footer> </Footer></div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "AboutUs",
  components: {
    TopBar,
    SideMenu,
    Footer,
  },
};
</script>

<style scoped>

</style>
