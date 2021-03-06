# vue 代码和效果

:::snippet `Vue.js`引用

1. `Vue`是一套用于构建用户界面的渐进式框架。
2. `Vue`被设计为可以自底向上逐层应用。
3. `Vue`的核心库只关注视图层。

```html
<script src="https://unpkg.com/vue@next"></script>
```

```bash
$ npm install vue@next
```

:::

:::snippet 声明式渲染
`Vue.js`的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进`DOM`的系统

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app">
  counter:{{counter}}
  <p v-bind:title="title">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </p>
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转 Message</button>
  <p>{{ input }}</p>
  <input v-model="input" />
</div>
```

```javascript
const app = {
  data() {
    return {
      counter: 0,
      title: "You title " + new Date().toLocaleString(),
      message: "Hello Vue.js!",
      input: "",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
  },
};
Vue.createApp(app).mount("#app");
```

:::

:::snippet 条件与循环

`v-if`指令控制切换一个元素是否显示

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app" class="demo">
  <p v-if="seen">Now you see me</p>
  <button v-on:click="seen=!seen">显示隐藏</button>
</div>
```

```javascript
const app = {
  data() {
    return {
      seen: true,
    };
  },
};

Vue.createApp(app).mount("#app");
```

`v-for`指令可以绑定数组的数据来渲染一个项目列表

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app" class="demo">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```javascript
const app = {
  data() {
    return {
      todos: [
        {
          text: "Learn JavaScript",
        },
        {
          text: "Learn Vue",
        },
        {
          text: "Build something awesome",
        },
      ],
    };
  },
};
Vue.createApp(app).mount("#app");
```

:::

:::snippet 组件化应用构建

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app" class="demo">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
```

```javascript
 const ComponentsApp = {
        data() {
            return {
                groceryList: [{
                        id: 0,
                        text: 'vue'
                    },
                    {
                        id: 1,
                        text: 'node'
                    },
                    {
                        id: 2,
                        text: 'ts'
                    }
                ]
            }
        }
    }
    const app = Vue.createApp(ComponentsApp)
    app.component('todo-item', {
        props: ['todo'],
        template: `<li>{{ todo.text }}</li>`
    })
    app.mount('#app')
```

:::

:::snippet 自定义元素的关系

> 自定义元素——它是`Web`组件规范的一部分，这是因为`Vue`的组件语法部分参考了该规范。例如 Vue 组件实现了`Slot API`与`is`特性。但是，还是有几个关键差别：

1. `Web Components`规范已经完成并通过，但未被所有浏览器原生实现。目前`Safari 10.1+`、`Chrome 54+`
   和`Firefox 63+`原生支持`Web Components`。相比之下，`Vue`组件不需要任何`polyfill`，
   并且在所有支持的浏览器 (`IE9`及更高版本) 之下表现一致。必要时，`Vue` 组件也可以包装于原生自定义元素之内。
2. `Vue` 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。

:::
