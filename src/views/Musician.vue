<template>
  <div class="musician">
     <TopBar> </TopBar>
    <div class="w-screen flex">
      <div class="nav-container">
        <SideMenu> </SideMenu>
      </div>
      <!-- content -->
      <div class="content flex flex-col w-screen justify-center items-center py-10 laptop:py-0">

        <!-- image, name and text -->
        <div class="image-and-text flex w-9/12 h-1/2 my-5 justify-center items-center tablet:w-11.5/12 tablet:h-auto ">
          <!-- image -->
          <div class="h-80 w-1/2 image flex justify-center items-center bg-gray-600">
            <div class="w-full h-full bg-black object-contain">
              <img :src="getFront" :alt=musician.name class="object-cover h-full w-full">
            </div>
          </div>
          <!-- end of image -->

          <!-- name and description -->
          <div class="h-full w-1/2 flex flex-col justify-start p-10 tablet:p-7">
            <h1 class="pt-2 pb-2 my-2 text-3xl w-full text-center font-bold leading-none laptop:text-4xl"> {{musician.name}}</h1>
            <p class="w-full h-full my-5 text-left text-xs leading-4 tablet:text-xs laptop:text-sm"> {{musician.description}}</p>
          </div>
        </div>
        <!-- end of name and description -->

        <div class="slider-container w-9/12 h-full mt-1 mb-1 flex tablet:flex-col tablet:items-center">
          <div class="w-2.5/5 h-3/4 flex mx-3 laptop:w-full">
            <div class="w-full h-11.5/12 flex flex-col items-center py-4">
              <h2 class="text-xl font-semibold tracking-wide my-1 laptop:text-2xl">¡Encuentra al artista en sus redes!</h2>
                <p class="text-lg my-1">{{musician.socialMedia}}</p>
                <div class="icons-container w-4/5 flex justify-evenly py-6">

                  <a href="#" class="rounded-full border-4 border-black w-16 h-16 mr-1 ml-1 flex justify-center items-center tablet:w-12 tablet:h-12">
                    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram w-10 h-10 tablet:w-7 tablet:h-7">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                    </svg>
                  </a>

                  <a href="#" class="rounded-full border-4 border-black w-16 h-16 mr-1 ml-1 flex justify-center items-center tablet:w-12 tablet:h-12">
                    <svg viewBox="0 0 20 14" class="w-10 h-10 tablet:h-7 tablet:w-7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>

                  <a href="#" class="rounded-full border-4 border-black w-16 h-16 mr-1 ml-1 flex justify-center items-center tablet:w-12 tablet:h-12">
                    <svg viewBox="0 0 256 209" version="1.1" class="w-10 h-10 tablet:w-7 tablet:h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                      <g>
                        <path d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259" fill="#000"></path>
                      </g>
                    </svg>
                  </a>

                 <a href="#" class="rounded-full border-4 border-black w-16 h-16 mr-1 ml-1 flex justify-center items-center tablet:h-12 tablet:w-12">
                  <svg  class="w-10 h-10 tablet:w-7 tablet:h-7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="#000">
                    <g>
                      <g>
                        <g>
                          <path class="st0" d="M402.101,178.1103c-115.8812,0-116.0309,115.4454-116.0309,116.0383c0,0-7.9384,115.5891,116.0309,115.5891 c0,0,93.3172,5.3056,102.6401-68.1871c0.8228-6.4826-4.2116-12.2582-10.7461-12.2582h-32.434 c-4.7037,0-8.9405,2.996-10.2776,7.5055c-2.8433,9.5987-12.8008,24.9937-47.4154,24.9937c0,0-44.9249,2.9901-52.1206-40.1515 c-1.0822-6.4886,4.1345-12.3501,10.7135-12.3501h134.7228c5.8008,0,10.6053-4.5614,10.8024-10.3592 C509.0402,267.9453,503.361,178.1103,402.101,178.1103z M358.2523,268.8451c-4.2887,0-7.338-4.1567-6.0186-8.2379 c4.3153-13.3507,16.9323-38.2347,51.0473-38.2347c35.1661,0,43.4721,26.2775,45.4304,39.3139 c0.5677,3.7816-2.4297,7.1586-6.2544,7.1586H358.2523z M219.0734,241.9406c-3.8024-1.2541-4.3494-6.4441-0.7798-8.2556 c12.9401-6.5671,28.172-20.9096,28.172-52.042c0-53.9677-37.6462-80.4438-85.4425-80.4438H11.7399 c-4.3835,0-7.9369,3.5534-7.9369,7.9369v286.3349c0,4.3835,3.5534,7.9369,7.9369,7.9369h149.2684 c0,0,96.036,2.9471,96.036-89.2628C257.0501,314.145,260.27,255.5448,219.0734,241.9406z M73.0767,160.6073 c0-3.1665,2.5676-5.734,5.734-5.734h82.2049c0,0,21.3277,0,21.3277,31.4689c0,31.4674-12.5028,36.0303-26.7696,36.0303H78.8107 c-3.1665,0-5.734-2.5661-5.734-5.734V160.6073z M156.6099,349.7336H78.8107c-3.1665,0-5.734-2.5676-5.734-5.734v-69.4205 c0-3.1665,2.5676-5.734,5.734-5.734h82.2049c0,0,31.9196-0.2921,31.7684,41.6176 C192.784,345.7637,169.1112,349.4401,156.6099,349.7336z M337.0981,113.266v25.849c0,3.1383,2.5438,5.6807,5.6821,5.6807H456.131 c3.1383,0,5.6821-2.5424,5.6821-5.6807v-25.849c0-3.1368-2.5438-5.6807-5.6821-5.6807H342.7803 C339.642,107.5854,337.0981,110.1292,337.0981,113.266z"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
            <!-- Carousel -->
            <div class="w-1/2 h-full tablet:w-full">
              <Carousel3d :controlsVisible=visibility :controlsWidth=controlsWidth :controlsHeight=controlsHeight :height=height >
                <Slide :index=i><img :src="getFront" :alt="musician.name"></Slide>
                <Slide :index=i2><img :src="getSide" :alt="musician.name"></Slide>
                <Slide :index=i3><img :src="getBack" :alt="musician.name"></Slide>
              </Carousel3d>
            </div>
          <!-- End of carousel -->
        </div>
      </div>
      <!-- End of content -->
    </div>
    <div class="footer-container"> <Footer> </Footer> </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopBar from "@/components/TopBar/TopBar.vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Musician",
  components: {
    TopBar,
    SideMenu,
    Carousel3d,
    Slide,
    Footer,
  },

  data () {
    return {
      musician: {},
      i: 0,
      i2: 1,
      i3: 2,
      visibility: true,
      controlsWidth: 25,
      controlsHeight: 25,
      heigth: 350,
    };
  },

  computed: {
    ...mapGetters(["musicians"]),
    getFront () {
      return require("../assets/images/artists/music" + this.musician.photos.front);
    },
    getSide () {
      return require("../assets/images/artists/music" + this.musician.photos.side);
    },
    getBack () {
      return require("../assets/images/artists/music" + this.musician.photos.back);
    },
  },
  methods: {
    getMusician () {
      this.musician = this.musicians(this.$route.params.name);
    },
  },

  beforeMount () {
    this.getMusician();
  },
};
</script>

<style scoped>

img {
  object-fit: cover;
}

.text {
  max-width: 50ch;
}

</style>
