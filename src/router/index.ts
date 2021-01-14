import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/vue",
    name: "vue",
    //component: () => import("../views/00.md")
    component: () => import("../../course/03vue/01vue3/00.md")
  },
  {
    path: "/icon",
    name: "icon",
    //component: () => import("../views/00.md")
    component: () => import("@/components/icon/README.md")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
