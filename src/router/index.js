import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    /*
     * Route level code-splitting
     * this generates a separate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     */
    component: () => import(/* WebpackChunk: "about" */ "../views/About.vue"),
  },

  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/GiantMenu.vue"),
  },

  {
    path: "/aboutUs",
    name: "AboutUs",
    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
