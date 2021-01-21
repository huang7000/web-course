import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/vue00",
        name: "vue00",
        //component: () => import("../views/00.md")
        component: () => import("../../course/03vue/01vue3/00.md")
      },
      {
        path: "/vue01",
        name: "vue01",
        //component: () => import("../views/00.md")
        component: () => import("../../course/03vue/01vue3/01.md")
      },
      {
        path: "/vue02",
        name: "vue02",
        //component: () => import("../views/00.md")
        component: () => import("../../course/03vue/01vue3/02.md")
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
