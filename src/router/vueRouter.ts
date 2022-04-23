import { RouteRecordRaw } from "vue-router";
export type MenuItemModel = {
  title?: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/vue/README",
    name: "vueREADME",
    component: () => import("../../course/frame/vue/README.md"),
  },
  {
    path: "/vue/mdComposition",
    name: "mdComposition",
    component: () => import("../../course/frame/vue/mdComposition.md"),
  },
  {
    path: "/vue/mdOptions",
    name: "mdOptions",
    component: () => import("../../course/frame/vue/mdOptions.md"),
  },
  {
    path: "/vue/setupOptions",
    name: "setupOptions",
    component: () => import("../../course/frame/vue/setupOptions.vue"),
  },
];

const menus: Array<MenuItemModel> = [
  {
    title: "vue",
    children: [
      {
        path: "/vue/README",
        title: "官方文档学习",
        subtitle: "",
      },
      // {
      //   path: "/vue/mdComposition",
      //   title: "mdComposition",
      //   subtitle: "",
      // },
      // {
      //   path: "/vue/mdOptions",
      //   title: "mdOptions",
      //   subtitle: "",
      // },
      // {
      //   path: "/vue/setupOptions",
      //   title: "setupOptions",
      //   subtitle: "",
      // },
    ],
  },
];

export default { routes, menus };
