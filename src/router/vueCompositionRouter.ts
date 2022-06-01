import { RouteRecordRaw } from "vue-router";
export type MenuItemModel = {
  title?: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};

const basePath = "vueComposition";
const routes: Array<RouteRecordRaw> = [];
const menusFisrt: Array<MenuItemModel> = [];
const menusSecond: Array<MenuItemModel> = [];
const menusThird: Array<MenuItemModel> = [];
const menusFourth: Array<MenuItemModel> = [];
const menusFifth: Array<MenuItemModel> = [];
const menusSixth: Array<MenuItemModel> = [];
const titleFirstString = `安装,介绍,应用&实例,模板语法,Data Property和方法,计算属性和监听器,Class 与 Style 绑定,条件渲染,列表渲染,事件处理,表单输入绑定`;
const titleFirstArr = titleFirstString.split(",");
const titleSecondString = `基础,注册,Props,非 Prop 的 Attribute,自定义事件,插槽 slot, Provide / Inject,动态 & 异步,模板引用,处理边界`;
const titleSecondArr = titleSecondString.split(",");
const titleThirdString = `过渡 & 动画概述,进入过渡 & 离开过渡,列表过渡,状态过渡`;
const titleThirdArr = titleThirdString.split(",");
const titleFourthString = `组合式 API,Mixin,自定义指令,Teleport,渲染函数,插件`;
const titleFourthArr = titleFourthString.split(",");
const titleFifthString = `响应式,组合式 API`;
const titleFifthArr = titleFifthString.split(",");
const titleSixthString = `应用配置,应用 API,全局 API,选项,实例 property,实例方法,指令,特殊 attribute,内置组件,响应式 API,组合式 API,单文件组件`;
const titleSixthArr = titleSixthString.split(",");
const indexFirst = titleFirstArr.length;
const indexSecond = indexFirst + titleSecondArr.length;
const indexThird = indexSecond + titleThirdArr.length;
const indexFourth = indexThird + titleFourthArr.length;
const indexFifth = indexFourth + titleFifthArr.length;
const indexSixth = indexFifth + titleSixthArr.length;

const titleArr = [
  ...titleFirstArr,
  ...titleSecondArr,
  ...titleThirdArr,
  ...titleFourthArr,
  ...titleFifthArr,
  ...titleSixthArr,
];

for (let index = 0; index < titleArr.length; index++) {
  const path = `/vue/${basePath}/${index < 10 ? "0" + index : index}`;
  const route = {
    path: path,
    name: `${basePath}${index < 10 ? "0" + index : index}`,
    component: () =>
      import(
        `../../course/frame/vue/${basePath}/${
          index < 10 ? "0" + index : index
        }.md`
      ),
  };
  const menuModel = {
    path: path,
    title: titleArr[index],
    subtitle: "",
  };
  routes.push(route);
  if (index < indexFirst) {
    menusFisrt.push(menuModel);
  } else if (index < indexSecond) {
    menusSecond.push(menuModel);
  } else if (index < indexThird) {
    menusThird.push(menuModel);
  } else if (index < indexFourth) {
    menusFourth.push(menuModel);
  } else if (index < indexFifth) {
    menusFifth.push(menuModel);
  } else if (index < indexSixth) {
    menusSixth.push(menuModel);
  }
}
const menus: Array<MenuItemModel> = [
  {
    title: basePath,
    children: [
      {
        title: "学习进度",
        children: [
          {
            path: "/vue/remark",
            title: "官方文档学习",
            subtitle: "",
          },
        ],
      },
      {
        title: "第一部分 基础",
        children: menusFisrt,
      },
      {
        title: "第二部分 组件",
        children: menusSecond,
      },
      {
        title: "第三部分 过渡动画",
        children: menusThird,
      },
      {
        title: "第四部分 复用组合",
        children: menusFourth,
      },
      {
        title: "第五部分 高阶指南",
        children: menusFifth,
      },
      {
        title: "第六部分 API",
        children: menusSixth,
      },
    ],
  },
];

export default { routes, menus };
