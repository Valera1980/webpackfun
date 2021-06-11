import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/map",
    name: "Map",
    component: () =>
      import(/* webpackChunkName: "about" */ "../feature-map/lending-map.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../feature-products/lending-products.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
