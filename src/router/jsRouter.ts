import { RouteRecordRaw } from "vue-router";
export type MenuItemModel = {
  title?: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/js/01",
    name: "js01",
    component: () => import("../../course/core/js/01.md")
  },
  {
    path: "/js/02",
    name: "js02",
    component: () => import("../../course/core/js/02.md")
  },
  {
    path: "/js/03",
    name: "js03",
    component: () => import("../../course/core/js/03.md")
  },
];

const menus: Array<MenuItemModel> = [
  {
    title: "JavaScript",
    children: [
      {
        title: "第一部分 基础知识",
        children: [
          {
            path: "/js/01",
            title: "第1章",
            subtitle: "什么是JavaScript",
          },
          {
            path: "/js/02",
            title: "第2章",
            subtitle: "HTML中的JavaScript",
          },
          {
            path: "/js/03",
            title: "第3章",
            subtitle: "语言基础",
          },
        ],
      },
    ],
  },
];

export default { routes, menus };
