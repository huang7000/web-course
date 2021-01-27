import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/vue00",
        name: "vue00",
        component: () => import("../../course/frame/vue/00.md")
      },
      {
        path: "/vue01",
        name: "vue01",
        component: () => import("../../course/frame/vue/01.md")
      },
      {
        path: "/vue02",
        name: "vue02",
        component: () => import("../../course/frame/vue/02.md")
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
