<template>
  <div class="vs-index">
    <div class="vs-index--header">
      <img class="vs-index--header-logo" src="../assets/logo.png" alt="logo" />
      <div class="vs-index--header-title">VOCE</div>
    </div>
    <div class="vs-index--left">
      <vc-index-menu
        v-for="(menu, index) in menuList"
        :key="index"
        :data="menu"
      />
    </div>
    <div class="vs-index--content">
      <div class="vs-index--content-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VcIndexMenu from "../../build/components/index-menu.vue";

export default defineComponent({
  components: { VcIndexMenu },
  setup() {
    const menuList = [
      {
        title: "vue",
        children: [
          {
            title: "通用",
            children: [
              {
                path: "/vue00",
                title: "test",
                subtitle: "",
              },
              {
                path: "/vue01",
                title: "安装介绍",
                subtitle: "",
              },
              {
                path: "/vue02",
                title: "应用&组件实例",
                subtitle: "",
              },
            ],
          },
        ],
      },
    ];

    return { menuList };
  },
});
</script>

<style lang="scss" scoped>
.vs-index--header {
  position: fixed;
  top: 0;
  left: 0;
  height: 48px;
  padding: 8px 32px;
  background: #ffffff;
  z-index: 1200;
  display: flex;
  align-items: center;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 100%;
}

.vs-index--header-logo {
  position: relative;
  height: 28px;
}

.vs-index--header-title {
  font-size: 24px;
  font-weight: bold;
  padding: 0 12px;
}

.vs-index--left {
  font-size: 14px;
  padding: 16px 0;
  width: 240px;
  position: fixed;
  z-index: 1010;
  margin: 0;
  top: 48px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
}

.vs-index--content {
  padding-left: 240px;
}

.vs-index--content-view {
  max-width: 1000px;
  padding: 72px 50px 60px 50px;
  margin: 0 auto;
}
</style>
