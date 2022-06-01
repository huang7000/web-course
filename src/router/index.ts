import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import jsRouter from "./jsRouter";

import vueCompositionRouter from "./vueCompositionRouter";
import vueOptionsRouter from "./vueOptionsRouter";
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
      ...vueCompositionRouter.routes,
      ...vueOptionsRouter.routes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
