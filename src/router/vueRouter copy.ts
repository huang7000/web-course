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
    component: () => import("../../course/frame/vue/README.md")
  },
  {
    path: "/vue/mdComposition",
    name: "mdComposition",
    component: () => import("../../course/frame/vue/mdComposition.md")
  },
  {
    path: "/vue/mdOptions",
    name: "mdOptions",
    component: () => import("../../course/frame/vue/mdOptions.md")
  },
  // {
  //   path: "/vue/vComposition",
  //   name: "vComposition",
  //   component: () => import("../../course/frame/vue/vComposition.vue")
  // },

  // {
  //   path: "/vue/vOptions",
  //   name: "vOptions",
  //   component: () => import("../../course/frame/vue/vOptions.vue")
  // },
  {
    path: "/vue/00",
    name: "vue00",
    component: () => import("../../course/frame/vue/00.md")
  },
  {
    path: "/vue/01",
    name: "vue01",
    component: () => import("../../course/frame/vue/01.md")
  },
  {
    path: "/vue/02",
    name: "vue02",
    component: () => import("../../course/frame/vue/02.md")
  },
  //md文件有问题
  // {
  //   path: "/vue/03",
  //   name: "vue03",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // {
  //   path: "/vue/04",
  //   name: "vue04",
  //   component: () => import("../../course/frame/vue/04.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/05",
  //   name: "vue05",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // {
  //   path: "/vue/06",
  //   name: "vue06",
  //   component: () => import("../../course/frame/vue/06.md")
  // },
  // {
  //   path: "/vue/07",
  //   name: "vue07",
  //   component: () => import("../../course/frame/vue/07.md")
  // },
  // {
  //   path: "/vue/08",
  //   name: "vue08",
  //   component: () => import("../../course/frame/vue/08.md")
  // },
  // {
  //   path: "/vue/09",
  //   name: "vue09",
  //   component: () => import("../../course/frame/vue/09.md")
  // },
  // {
  //   path: "/vue/10",
  //   name: "vue10",
  //   component: () => import("../../course/frame/vue/10.md")
  // },
  // {
  //   path: "/vue/11",
  //   name: "vue11",
  //   component: () => import("../../course/frame/vue/11.md")
  // },
  // {
  //   path: "/vue/12",
  //   name: "vue12",
  //   component: () => import("../../course/frame/vue/12.md")
  // },
  // {
  //   path: "/vue/13",
  //   name: "vue13",
  //   component: () => import("../../course/frame/vue/13.md")
  // },
  // {
  //   path: "/vue/14",
  //   name: "vue14",
  //   component: () => import("../../course/frame/vue/14.md")
  // },
  // {
  //   path: "/vue/15",
  //   name: "vue15",
  //   component: () => import("../../course/frame/vue/15.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/16",
  //   name: "vue16",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // {
  //   path: "/vue/17",
  //   name: "vue17",
  //   component: () => import("../../course/frame/vue/17.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/18",
  //   name: "vue18",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/19",
  //   name: "vue19",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // {
  //   path: "/vue/20",
  //   name: "vue20",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // {
  //   path: "/vue/21",
  //   name: "vue21",
  //   component: () => import("../../course/frame/vue/21.md")
  // },
  // {
  //   path: "/vue/22",
  //   name: "vue22",
  //   component: () => import("../../course/frame/vue/22.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/23",
  //   name: "vue23",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // {
  //   path: "/vue/24",
  //   name: "vue24",
  //   component: () => import("../../course/frame/vue/24.md")
  // },
  // {
  //   path: "/vue/25",
  //   name: "vue25",
  //   component: () => import("../../course/frame/vue/25.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/26",
  //   name: "vue26",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/27",
  //   name: "vue27",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/28",
  //   name: "vue28",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/29",
  //   name: "vue29",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/30",
  //   name: "vue30",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/31",
  //   name: "vue31",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/32",
  //   name: "vue32",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/33",
  //   name: "vue33",
  //   component: () => import("../../course/frame/vue/00.md")
  // },
  // //md文件有问题
  // {
  //   path: "/vue/34",
  //   name: "vue34",
  //   component: () => import("../../course/frame/vue/00.md")
  // },

];

const menus: Array<MenuItemModel> = [
  {
    title: "vue",
    children: [
      {
        title: "学习内容",
        children: [
          {
            path: "/vue/README",
            title: "官方文档学习",
            subtitle: "",
          },
          {
            path: "/vue/mdComposition",
            title: "mdComposition",
            subtitle: "",
          },
          {
            path: "/vue/mdOptions",
            title: "mdOptions",
            subtitle: "",
          },
          // {
          //   path: "/vue/vComposition",
          //   title: "vComposition",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/vOptions",
          //   title: "vOptions",
          //   subtitle: "",
          // },

        ],
      },
      {
        title: "第一部分 基础",
        children: [
          {
            path: "/vue/00",
            title: "安装",
            subtitle: "",
          },
          {
            path: "/vue/01",
            title: "介绍",
            subtitle: "",
          },
          {
            path: "/vue/02",
            title: "应用 & 组件实例",
            subtitle: "",
          },
          // {
          //   path: "/vue/03",
          //   title: "模板语法",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/04",
          //   title: "Data Property 和方法",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/05",
          //   title: "计算属性和侦听器",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/06",
          //   title: "Class 与 Style 绑定",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/07",
          //   title: "条件渲染",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/08",
          //   title: "列表渲染",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/09",
          //   title: "事件处理",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/10",
          //   title: "表单输入绑定",
          //   subtitle: "",
          // },
          // {
          //   path: "/vue/11",
          //   title: "组件基础",
          //   subtitle: "",
          // },

        ],
      },
      // {
      //   title: "第二部分 深入组件",
      //   children: [

      //     {
      //       path: "/vue/12",
      //       title: "组件注册",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/13",
      //       title: "Props",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/14",
      //       title: "非 Prop 的 Attribute",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/15",
      //       title: "自定义事件",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/16",
      //       title: "插槽",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/17",
      //       title: "Provide / Inject",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/18",
      //       title: "动态组件 & 异步组件",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/19",
      //       title: "模板引用",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/20",
      //       title: "处理边界情况",
      //       subtitle: "",
      //     },

      //   ],
      // },
      // {
      //   title: "第三部分 过渡 & 动画",
      //   children: [
      //     {
      //       path: "/vue/21",
      //       title: "过渡 & 动画概述",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/22",
      //       title: "进入过渡 & 离开过渡",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/23",
      //       title: "列表过渡",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/24",
      //       title: "状态过渡",
      //       subtitle: "",
      //     },
      //   ],
      // },
      // {
      //   title: "第四部分 组合式 API",
      //   children: [
      //     {
      //       path: "/vue/25",
      //       title: "介绍",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/26",
      //       title: "Setup",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/27",
      //       title: "生命周期钩子",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/28",
      //       title: "Provide / Inject",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/29",
      //       title: "模板引用",
      //       subtitle: "",
      //     },
      //   ],
      // },
      // {
      //   title: "第五部分 可复用",
      //   children: [
      //     {
      //       path: "/vue/30",
      //       title: "Mixin",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/31",
      //       title: "自定义指令",
      //       subtitle: "",
      //     },

      //     {
      //       path: "/vue/32",
      //       title: "Teleport",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/33",
      //       title: "渲染函数",
      //       subtitle: "",
      //     },
      //     {
      //       path: "/vue/34",
      //       title: "插件",
      //       subtitle: "",
      //     },
      //   ],
      // },
    ],
  },
];

export default { routes, menus };
