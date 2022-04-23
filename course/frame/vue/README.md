# vue

## vComposition

:::snippet 响应式vue

```vue
<template>
 <ul>
            <li>姓名：{{name}}</li>
            <li>姓名： <input v-model="name"></li>
            <li><button @click="updateName">修改姓名</button></li>
        </ul>
        <ul>
            <li>车名：{{car.name}}</li>
            <li>车价：{{car.price}}</li>
            <li>车价： <input v-model="car.price"></li>
            <li><button @click="updateCar">修改汽车</button></li>
        </ul>
        <ul>
            <li>机名：{{plane.name}}</li>
            <li>机价：{{plane.price}}</li>
            <li>机价： <input v-model="plane.price"></li>
            <li><button @click="updatePlane">修改汽车</button></li>
        </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
            return {
                name: '张三',
                car: { name: "奥迪", price: '40' },
                plane: { name: "长城", price: '300' }

            }
        },
        methods: {
            updateName() {
                this.name = this.name.split('').reverse().join('')
            },
            updateCar() {
                this.car = {
                    name: this.car.name.split('').reverse().join(''),
                    price: this.car.price * 2
                }
            },
            updatePlane() {
                this.plane = {
                    name: this.plane.name.split('').reverse().join(''),
                    price: this.plane.price * 2
                }
            },
        }
});
</script>
```

:::

## hComposition

:::snippet html响应式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composition API 响应式</title>
</head>
<body>
    <div id="app">
        <ul>
            <li>姓名：{{name}}</li>
            <li>姓名： <input v-model="name"></li>
            <li><button @click="updateName">修改姓名</button></li>
        </ul>
        <ul>
            <li>车名：{{car.name}}</li>
            <li>车价：{{car.price}}</li>
            <li>车价： <input v-model="car.price"></li>
            <li><button @click="updateCar">修改汽车</button></li>
        </ul>
        <ul>
            <li>机名：{{plane.name}}</li>
            <li>机价：{{plane.price}}</li>
            <li>机价： <input v-model="plane.price"></li>
            <li><button @click="updatePlane">修改汽车</button></li>
        </ul>
    </div>

</body>
<script src="https://unpkg.com/vue@next"></script>
<script>
    Vue.createApp({
        data() {
            return {
                name: '张三',
                car: { name: "奥迪", price: '40' },
                plane: { name: "长城", price: '300' }

            }
        },
        methods: {
            updateName() {
                this.name = this.name.split('').reverse().join('')
            },
            updateCar() {
                this.car = {
                    name: this.car.name.split('').reverse().join(''),
                    price: this.car.price * 2
                }
            },
            updatePlane() {
                this.plane = {
                    name: this.plane.name.split('').reverse().join(''),
                    price: this.plane.price * 2
                }
            },
        }
    }).mount('#app')
</script>

</html>
```

:::

:::snippet 组合式vue

```vue
<template>
 <ul>
            <li>姓名：{{name}}</li>
            <li>姓名： <input v-model="name"></li>
            <li><button @click="updateName">修改姓名</button></li>
        </ul>
        <ul>
            <li>车名：{{car.name}}</li>
            <li>车价：{{car.price}}</li>
            <li>车价： <input v-model="car.price"></li>
            <li><button @click="updateCar">修改汽车</button></li>
        </ul>
        <ul>
            <li>机名：{{plane.name}}</li>
            <li>机价：{{plane.price}}</li>
            <li>机价： <input v-model="plane.price"></li>
            <li><button @click="updatePlane">修改汽车</button></li>
        </ul>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
            // 使用ref定义基本类型数据
            let name = ref('张三')
            let updateName = () => {
                // 修改值时，必须要点value
                name.value = '李四'
            }
            // 使用ref定义引用类型数据
            let car = ref({
                name: '奔驰',
                price: 30
            })
            let updateCar = () => {
                // 修改值时，必须要点value
                car.value.name = '奥迪'
                car.value.price = 40
            }
            // 使用reactive定义引用类型数据
            // 注意：reactive只能定义引用类型数据
            let plane = reactive({
                name: '长城',
                price: 300
            })
            let updatePlane = () => {
                // Proxy对象，不需要先点value
                plane.name = '东方'
                plane.price = 400
            }
            //setup方法，返回出去的对象里面的成员，可以在模板中使用
            return {
                name,
                updateName,
                car,
                updateCar,
                plane,
                updatePlane
            }
        }
});


</script>
```

:::

## hOptions

:::snippet html组合式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Options API 组合式</title>
</head>
<body>
    <div id="app">
        <ul>
            <li>姓名：{{name}}</li>
            <li>姓名： <input v-model="name"></li>
            <li><button @click="updateName">修改姓名</button></li>
        </ul>
        <ul>
            <li>车名：{{car.name}}</li>
            <li>车价：{{car.price}}</li>
            <li>车价： <input v-model="car.price"></li>
            <li><button @click="updateCar">修改汽车</button></li>
        </ul>
        <ul>
            <li>机名：{{plane.name}}</li>
            <li>机价：{{plane.price}}</li>
            <li>机价： <input v-model="plane.price"></li>
            <li><button @click="updatePlane">修改汽车</button></li>
        </ul>
    </div>
</body>
<script src="https://unpkg.com/vue@next"></script>
<script>
    // ref 和 reactive 用于定义响应式数据
    let { ref, reactive } = Vue
    Vue.createApp({
        // 所有的组合式api，要在setup方法里面使用
        setup() {
            // 使用ref定义基本类型数据
            let name = ref('张三')
            let updateName = () => {
                // 修改值时，必须要点value
                name.value = '李四'
            }
            // 使用ref定义引用类型数据
            let car = ref({
                name: '奔驰',
                price: 30
            })
            let updateCar = () => {
                // 修改值时，必须要点value
                car.value.name = '奥迪'
                car.value.price = 40
            }
            // 使用reactive定义引用类型数据
            // 注意：reactive只能定义引用类型数据
            let plane = reactive({
                name: '长城',
                price: 300
            })
            let updatePlane = () => {
                // Proxy对象，不需要先点value
                plane.name = '东方'
                plane.price = 400
            }
            //setup方法，返回出去的对象里面的成员，可以在模板中使用
            return {
                name,
                updateName,
                car,
                updateCar,
                plane,
                updatePlane
            }
        }
    }).mount('#app')
</script>

</html>
```

:::

## vue 3.0 官方文档学习

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
  - [ ] 组合式 API
  - [ ] Mixin
  - [ ] 自定义指令
  - [ ] Teleport
  - [ ] 渲染函数
  - [ ] 插件
- [ ] 高阶指南
  - [ ] 响应式
  - [ ] 组合式 API
- [ ] API
  - [ ] 应用配置
  - [ ] 应用 API
  - [ ] 全局 API
  - [ ] 选项
  - [ ] 实例 property
  - [ ] 实例方法
  - [ ] 指令
  - [ ] 特殊 attribute
  - [ ] 内置组件
  - [ ] 响应式 API
  - [ ] 组合式 API
  - [ ] 单文件组件
- [ ] Vue 2 迁移
  - [ ] Vue 2 中的更改检测警告
  - [ ] v-for 中的 Ref 数组
  - [ ] 异步组件
  - [ ] attribute 强制行为
  - [ ] $attrs 包括 class & styke
  - [ ] $children
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
  - [ ] 移除 $listeners
  - [ ] 在 prop 的默认函数中访问 this
  - [ ] 渲染函数 API
  - [ ] Slot 统一
  - [ ] 过渡的 class 名更改
  - [ ] Transition Group 根元素
  - [ ] 移除 v-on.native 修饰符
  - [ ] v-model
  - [ ] v-if 与 v-for的优先级对比
  - [ ] v-bind 合并行为
  - [ ] Watch on Arrays
