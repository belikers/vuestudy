import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/vFor",
    name: "vFor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vFor.vue"),
  },
  {
    path: "/vIf1",
    name: "vIf1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vIf1.vue"),
  },
  {
    path: "/vShow",
    name: "vShow",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
