<template>
  <div class="vc-code-snippet">
    <!-- 运行效果 -->
    <transition
      leave-active-class="vc-code-snippet-run--transition"
      enter-active-class="vc-code-snippet-run--transition"
      @before-enter="transitionRunBeforeEnter"
      @enter="transitionRunEnter"
      @after-enter="transitionRunAfterEnter"
      @before-leave="transitionRunEnter"
      @leave="transitionBeforeRunEnter"
      @after-leave="transitionRunAfterEnter"
    >
      <div :class="exampleClasses" v-show="showRun" class="vc-code-snippet--example" ref="runEl">
        <slot name="example" />
      </div>
    </transition>

    <!-- 描述 -->
    <div class="vc-code-snippet--desc">
      <div class="vc-code-snippet-left--operate" @click="handleRunClick">
        <v-icon :type="runIcon"></v-icon>
      </div>
      <slot name="description" />
      <div class="vc-code-snippet-right--operate" @click="handleCodeClick">
        <v-icon :type="codeIcon"></v-icon>
      </div>
    </div>
    <!-- 源码 -->
    <transition
      leave-active-class="vc-code-snippet-code--transition"
      enter-active-class="vc-code-snippet-code--transition"
      @before-enter="transitionCodeBeforeEnter"
      @enter="transitionCodeEnter"
      @after-enter="transitionCodeAfterEnter"
      @before-leave="transitionCodeEnter"
      @leave="transitionBeforeCodeEnter"
      @after-leave="transitionCodeAfterEnter"
    >
      <div v-show="showCode" class="vc-code-snippet--code" ref="codeEl">
        <slot name="source" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import "highlight.js/styles/color-brewer.css";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "VcCodeSnippet",
  props: {
    showCode: {
      type: Boolean,
      default: false,
    },
    showRun: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    //const showCode = ref(false);
    //showCode是否显示或者隐藏改成由props
    const showCode = ref(props.showCode);
    const codeIcon = computed(() => {
      return showCode.value ? "code-collapse" : "code-expand";
    });

    const route = useRoute();
    const exampleClasses = computed(() => {
      return [
        "vc-code-snippet--example",
        `vc-code-snippet--${route.path.split("/").join("-")}`,
      ];
    });

    const handleCodeClick = () => {
      showCode.value = !showCode.value;
    };
    const showRun = ref(props.showRun);

    const runIcon = computed(() => {
      return showRun.value ? "poweroff" : "poweroff-circle-fill";
    });

    const handleRunClick = () => {
      showRun.value = !showRun.value;
    };

    const codeEl = ref<HTMLDivElement>();

    const transitionCodeBeforeEnter = (el: HTMLElement) => {
      el.style.maxHeight = "0px";
    };

    const transitionCodeEnter = (el: HTMLElement) => {
      if (!codeEl.value) return;
      el.style.maxHeight = `${codeEl.value.scrollHeight}px`;
    };

    const transitionCodeAfterEnter = (el: HTMLElement) => {
      el.style.maxHeight = "auto";
    };

    const runEl = ref<HTMLDivElement>();

    const transitionRunBeforeEnter = (el: HTMLElement) => {
      el.style.maxHeight = "0px";
    };

    const transitionRunEnter = (el: HTMLElement) => {
      if (!runEl.value) return;
      el.style.maxHeight = `${runEl.value.scrollHeight+1}px`;
    };

    const transitionRunAfterEnter = (el: HTMLElement) => {
      el.style.maxHeight = "auto";
    };

    return {
      showCode,
      codeIcon,
      showRun,
      runIcon,
      handleCodeClick,
      handleRunClick,
      exampleClasses,
      codeEl,
      transitionCodeBeforeEnter,
      transitionCodeEnter,
      transitionCodeAfterEnter,
      runEl,
      transitionRunBeforeEnter,
      transitionRunEnter,
      transitionRunAfterEnter,
    };
  },
});
</script>

<style lang="scss">
.vc-code-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px -2px mix($-color--primary, #ffffff, 10%),
    0 0 0 1px $-color--border-base;
  background-color: #ffffff;
  text-align: left;
  margin-bottom: 30px;
}

.vc-code-snippet--example {
  box-sizing: border-box;
  padding: 20px 24px;
  color: $-color--text-primary;
  border-bottom: 1px solid $-color--border-light;
  overflow-y: hidden;
}

.vc-code-snippet--desc {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 10px 50px 10px 20px;
  font-size: 14px;
  line-height: 1.5;
}
.vc-code-snippet--desc {
  p.vc-markdown-doc {
    position: absolute;
    left: 36px;
  }
}

.vc-code-snippet-right--operate {
  position: absolute;
  right: 16px;
  bottom: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.vc-code-snippet-left--operate {
  position: absolute;
  left: 16px;
  bottom: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.vc-code-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid $-color--border-light;
  box-sizing: border-box;
  overflow: hidden;

  > pre {
    margin: 0;
    padding: 0;
  }
}

.vc-code-snippet-code--transition {
  transition: 0.25s max-height ease-in-out;
}
.vc-code-snippet-run--transition {
  transition: 0.25s max-height ease-in-out;
}
.vc-code-snippet---component {
  &-icon {
    font-size: 32px;

    .v-icon {
      margin-right: 16px;
    }
  }

  &-button {
    .v-button {
      margin: 6px 12px 6px 0;
    }
  }

  &-link {
    .v-link {
      margin: 6px 12px 6px 0;
    }
  }

  &-text {
    span.v-text {
      margin: 6px 12px 6px 0;
    }

    .v-text--ellipsis {
      width: 60px;
    }
  }

  &-grid {
    .v-col {
      margin-top: 8px;
      margin-bottom: 8px;
      color: #fff;
      text-align: center;
      border-radius: 0;
      padding: 12px 0;
    }

    .v-row > .v-col:nth-child(2n + 1) > div {
      background: mix($-color--primary, #ffffff, 75%);
      padding: 12px 0px;
      width: 100%;
    }

    .v-row > .v-col:nth-child(2n) > div {
      background: $-color--primary;
      padding: 12px 0px;
      width: 100%;
    }
  }

  &-layout {
    > .v-layout {
      font-size: 18px;
      text-align: center;
      height: 360px;
      color: #ffffff;
    }

    > .v-layout + .v-layout {
      margin-top: 32px;
    }

    .v-layout-header,
    .v-layout-footer {
      background: mix($-color--primary, #ffffff, 75%);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
    }

    .v-layout-content {
      background: $-color--primary;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .v-layout-left,
    .v-layout-right {
      background: mix($-color--primary, #ffffff, 85%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-space {
    .v-space + .v-space {
      margin-top: 16px;
    }
  }

  &-affix {
    .v-button {
      margin: 6px 0;
    }
  }

  &-dropdown {
    .v-dropdown {
      margin: 6px 12px 6px 0;
    }
  }
}
</style>
