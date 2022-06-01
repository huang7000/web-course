import { RouteRecordRaw } from "vue-router";
export type MenuItemModel = {
  title?: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};
const basePath = "vueOptions";
const routes: Array<RouteRecordRaw> = [];
const menusFisrt: Array<MenuItemModel> = [];
const menusSecond: Array<MenuItemModel> = [];
const titleFirstString = `安装,介绍,应用&实例,模板语法,Data Property和方法,计算属性和监听器,Class 与 Style 绑定,条件渲染,列表渲染,事件处理,表单输入绑定`;
const titleFirstArr = titleFirstString.split(",");
const titleSecondString = `基础,注册,Props,非 Prop 的 Attribute,自定义事件,插槽 slot, Provide / Inject,动态 & 异步,模板引用,处理边界`;
const titleSecondArr = titleSecondString.split(",");
const titleArr = [...titleFirstArr, ...titleSecondArr];

for (let index = 0; index <= 20; index++) {
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
  if (index < titleFirstArr.length) {
    menusFisrt.push(menuModel);
  } else if (index >= titleFirstArr.length) {
    menusSecond.push(menuModel);
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
    ],
  },
];

export default { routes, menus };
