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
  {
    path: `/vue/${basePath}/02`,
    name: `${basePath}02`,
    component: () => import(`../../course/frame/vue/${basePath}/02.md`),
  },
  {
    path: `/vue/${basePath}/03`,
    name: `${basePath}03`,
    component: () => import(`../../course/frame/vue/${basePath}/03.md`),
  },
  {
    path: `/vue/${basePath}/04`,
    name: `${basePath}04`,
    component: () => import(`../../course/frame/vue/${basePath}/04.md`),
  },
  {
    path: `/vue/${basePath}/05`,
    name: `${basePath}05`,
    component: () => import(`../../course/frame/vue/${basePath}/05.md`),
  },
  {
    path: `/vue/${basePath}/06`,
    name: `${basePath}06`,
    component: () => import(`../../course/frame/vue/${basePath}/06.md`),
  },
  {
    path: `/vue/${basePath}/07`,
    name: `${basePath}07`,
    component: () => import(`../../course/frame/vue/${basePath}/07.md`),
  },
  {
    path: `/vue/${basePath}/08`,
    name: `${basePath}08`,
    component: () => import(`../../course/frame/vue/${basePath}/08.md`),
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
          {
            path: `/vue/${basePath}/02`,
            title: "应用&组件实例",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/03`,
            title: "模板语法",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/04`,
            title: "Data Property和方法",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/05`,
            title: "计算属性和监听器",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/06`,
            title: "Class 与 Style 绑定",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/07`,
            title: "条件渲染",
            subtitle: "",
          },
          {
            path: `/vue/${basePath}/08`,
            title: "列表渲染",
            subtitle: "",
          },
        ],
      },
    ],
  },
];

export default { routes, menus };
