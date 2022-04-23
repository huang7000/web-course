import { RouteRecordRaw } from "vue-router";
export type MenuItemModel = {
  title?: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};
const basePath = "vueOptions";
const routes: Array<RouteRecordRaw> = [
  {
    path: `/vue/${basePath}/00`,
    name: `${basePath}00`,
    component: () => import(`../../course/frame/vue/${basePath}/00.md`),
  },
  {
    path: `/vue/${basePath}/01`,
    name: `${basePath}01`,
    component: () => import(`../../course/frame/vue/${basePath}/01.md`),
  },
];

const menus: Array<MenuItemModel> = [
  {
    title: basePath,
    children: [
      {
        title: "第一部分 基础",
        children: [
          {
            path: `/vue/${basePath}/00`,
            title: "安装",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/01`,
            title: "介绍",
            subtitle: "",
          },
        ],
      },
    ],
  },
];

export default { routes, menus };
