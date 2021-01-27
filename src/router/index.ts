import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import javascript from "./jsRouter";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      ...javascript.routes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
