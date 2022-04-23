# mdOptions

:::snippet 组合式 vue

```vue
<template>
  <ul>
    <li>姓名：{{ name }}</li>
    <li>姓名： <input v-model="name" /></li>
    <li><button @click="updateName">修改姓名</button></li>
  </ul>
  <ul>
    <li>车名：{{ car.name }}</li>
    <li>车价：{{ car.price }}</li>
    <li>车价： <input v-model="car.price" /></li>
    <li><button @click="updateCar">修改汽车</button></li>
  </ul>
  <ul>
    <li>机名：{{ plane.name }}</li>
    <li>机价：{{ plane.price }}</li>
    <li>机价： <input v-model="plane.price" /></li>
    <li><button @click="updatePlane">修改汽车</button></li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    // 使用ref定义基本类型数据
    let name = ref("张三");
    let updateName = () => {
      // 修改值时，必须要点value
      name.value = "李四";
    };
    // 使用ref定义引用类型数据
    let car = ref({
      name: "奔驰",
      price: 30,
    });
    let updateCar = () => {
      // 修改值时，必须要点value
      car.value.name = "奥迪";
      car.value.price = 40;
    };
    // 使用reactive定义引用类型数据
    // 注意：reactive只能定义引用类型数据
    let plane = reactive({
      name: "长城",
      price: 300,
    });
    let updatePlane = () => {
      // Proxy对象，不需要先点value
      plane.name = "东方";
      plane.price = 400;
    };
    //setup方法，返回出去的对象里面的成员，可以在模板中使用
    return {
      name,
      updateName,
      car,
      updateCar,
      plane,
      updatePlane,
    };
  },
});
</script>
```

:::
