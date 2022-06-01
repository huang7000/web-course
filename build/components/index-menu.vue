<template>
  <div :class="['vc-left-menu-item', classes, 'div-level-' + (level + 1)]">
    <router-link
      v-if="data.path"
      class="vc-left-menu-item--link"
      :to="data.path"
    >
      {{ data.title }}
      <span v-text="data.subtitle" />
    </router-link>
    <div v-else class="vc-left-menu-item--title" @click="isShow = !isShow">
      {{ data.title }}
      {{ isShow ? "∧" : "∨" }}
    </div>
    <vc-index-menu
      v-show="isShow"
      v-for="(child, index) in data.children"
      :key="index"
      :data="child"
      :level="level + 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export type MenuItemModel = {
  title: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};

export default defineComponent({
  name: "VcIndexMenu",
  props: {
    data: {
      type: Object as PropType<MenuItemModel>,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const classes = {
      "vc-left-menu-item--root": props.level === 0,
      "vc-left-menu-item--group":
        props.level > 0 &&
        props.data.children &&
        props.data.children.length > 0,
    };
    const isShow = ref(true);
    return { classes, isShow };
  },
});
</script>

<style lang="scss" scoped>
.vc-left-menu-item--link {
  display: block;
  position: relative;
  // padding: 8px 24px;
  color: $-color--text-primary;
  font-weight: normal;
  line-height: 1.5;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s;
  cursor: pointer;

  &:active,
  &:hover {
    text-decoration: none;
    outline: 0;
    color: $-color--primary;
    background: mix($-color--primary, #ffffff, 3%);
  }

  &.router-link-exact-active {
    background: mix($-color--primary, #ffffff, 3%);
    color: $-color--primary;
  }

  &.router-link-exact-active::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: $-color--primary;
    box-shadow: 1px 0 12px 0 $-color--primary;
  }
}

.vc-left-menu-item--root {
  > .vc-left-menu-item--title {
    font-size: 14px;
    color: $-color--text-primary;
    // padding: 12px 8px 12px 24px;
    font-weight: bold;
  }
}

.vc-left-menu-item--group {
  > .vc-left-menu-item--title {
    color: $-color--text-secondary;
    font-size: 14px;
    // padding: 6px 8px 6px 24px;
  }
}
.div-level-1 {
  .vc-left-menu-item--title {
    font-size: 22px !important;
    padding: 6px 8px 6px 16px;
  }
}
.div-level-2 {
  .vc-left-menu-item--title,
  .vc-left-menu-item--link {
    font-size: 18px !important;
    padding: 6px 8px 6px 32px;
  }
}
.div-level-3 {
  .vc-left-menu-item--title,
  .vc-left-menu-item--link {
    font-size: 16px !important;
    padding: 6px 8px 6px 48px;
  }
}
</style>
