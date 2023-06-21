# web-course

- html/css [https://www.w3school.com.cn/h.asp](https://www.w3school.com.cn/h.asp)
- sass 文档地址：[https://www.sasscss.com/](https://www.sasscss.com/)
- JavaScript 文档地址：[https://zh.javascript.info/](https://zh.javascript.info/)
- ECMAScript 文档地址：[https://es6.ruanyifeng.com/](https://es6.ruanyifeng.com/)
- TypeScript 文档地址：[https://typescript.bootcss.com/](https://typescript.bootcss.com/)
- vue 文档地址：[https://v3.cn.vuejs.org/](https://v3.cn.vuejs.org/)
- echarts 文档：[https://echarts.apache.org/zh/index.html](https://echarts.apache.org/zh/index.html)

  依赖安装失败问题
  降低 node 版本 ，安装 nvm(node 版本管理工具，具体可以参考https://github.com/nvm-sh/nvm#installing-and-updating)
  我的安装步骤是
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  nvm install 14.7.0
  nvm run node --14.7.0
  node -v
  如果还报错的话就加上架构指定（--target_arch=x64 苹果 m1pro）
  npm install --target_arch=x64
  ceshitijiao
  vue 3.0 官方文档学习

- [ ] 基础
  - [ ] 开发概览
  - [ ] 安装介绍
  - [ ] 应用&组件实例
  - [ ] 模板语法
  - [ ] Data Property
  - [ ] 计算属性和侦听器
  - [ ] Class 与 Style 绑定
  - [ ] 条件渲染
  - [ ] 列表渲染
  - [ ] 事件处理
  - [ ] 表单输入绑定
  - [ ] 组件基础
- [ ] 深入组件
  - [ ] 组件注册
  - [ ] Props
  - [ ] 非 Prop 的 Attribute
  - [ ] 自定义事件
  - [ ] 插槽
  - [ ] Provide / Inject
  - [ ] 动态组件 & 异步组件
  - [ ] 模板引用
  - [ ] 处理边界情况
- [ ] 过渡 & 动画
  - [ ] 过渡 & 动画概述
  - [ ] 进入过渡 & 离开过渡
  - [ ] 列表过渡
  - [ ] 状态过渡
- [ ] 可复用 & 组合
  - [ ] 混入
  - [ ] 自定义指令
  - [ ] Teleport
  - [ ] 渲染函数
  - [ ] 插件
- [ ] 高阶指南
  - [ ] 响应式
  - [ ] 组合式 API
- [ ] Vue 2 迁移
  - [ ] Vue 2 中的更改检测警告
  - [ ] v-for 中的 Ref 数组
  - [ ] 异步组件
  - [ ] attribute 强制行为
  - [ ] \$attrs 包括 class & styke
  - [ ] \$children
  - [ ] 自定义指令
  - [ ] 自定义元素交互
  - [ ] Data 选项
  - [ ] emits Option
  - [ ] 事件 API
  - [ ] 过滤器
  - [ ] 片段
  - [ ] 函数式组件
  - [ ] 全局 API
  - [ ] 全局 API Treeshaking
  - [ ] 内联模板 Attribute
  - [ ] key attribute
  - [ ] 按键修饰符
  - [ ] 移除 \$listeners
  - [ ] 在 prop 的默认函数中访问 this
  - [ ] 渲染函数 API
  - [ ] Slot 统一
  - [ ] 过渡的 class 名更改
  - [ ] Transition Group 根元素
  - [ ] 移除 v-on.native 修饰符
  - [ ] v-model
  - [ ] v-if 与 v-for 的优先级对比
  - [ ] v-bind 合并行为
  - [ ] Watch on Arrays
