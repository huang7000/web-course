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
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      name: "张三",
      car: { name: "奥迪", price: "40" },
      plane: { name: "长城", price: "300" },
    };
  },
  methods: {
    updateName() {
      this.name = this.name.split("").reverse().join("");
    },
    updateCar() {
      this.car = {
        name: this.car.name.split("").reverse().join(""),
        price: this.car.price * 2,
      };
    },
    updatePlane() {
      this.plane = {
        name: this.plane.name.split("").reverse().join(""),
        price: this.plane.price * 2,
      };
    },
  },
});
</script>