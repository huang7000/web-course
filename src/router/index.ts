import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import jsRouter from "./jsRouter";

import vueRouter from "./vueRouter";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      // ...jsRouter.routes,
      {
        path: "/vue/remark",
        name: "vueRemark",
        component: () => import("../../course/frame/vue/remark.md"),
      },
      ...vueRouter.routes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
