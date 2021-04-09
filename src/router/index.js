import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },

  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/GiantMenu.vue"),
  },

  {
    path: "/store",
    name: "Tienda",
    component: () => import("../views/HarhuyStore.vue"),
  },

  {
    path: "/store/:name",
    name: "Producto",
    component: () => import("../views/ProductSheet.vue"),
  },

  {
    path: "/cart",
    name: "Carrito",
    component: () => import("../views/Cart.vue"),
  },

  {
    path: "/aboutUs",
    name: "About Us",
    component: () => import("../views/AboutUs.vue"),
  },

  {
    path: "/contactUs",
    name: "Contact Us",
    component: () => import("../views/ContactUs.vue"),
  },

  {
    path: "/suscripcion",
    name: "Suscripción",
    component: () => import("../views/SubscriptionPlans.vue"),
  },

  {
    path: "/illustration",
    name: "Ilustración",
    component: () => import("../views/Illustration.vue"),
  },

  {
    path: "/photography",
    name: "Fotografía",
    component: () => import("../views/Photography.vue"),
  },

  {
    path: "/music",
    name: "Música",
    component: () => import("../views/Music.vue"),
  },

  {
    path: "/video",
    name: "Vídeo",
    component: () => import("../views/Video.vue"),
  },

  {
    path: "/design",
    name: "Diseño",
    component: () => import("../views/Design.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
