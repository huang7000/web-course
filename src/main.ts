
// import { createApp } from 'vue';
// 修改 tsconfig.json exclude添加 src/main.ts
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);

// import VcMarkdownView from "./components/markdown-view.vue";
// app.component(VcMarkdownView.name as string, VcMarkdownView);

// import VcCodeSnippet from "./components/code-snippet.vue";
// app.component(VcCodeSnippet.name as string, VcCodeSnippet);


import VcMarkdownView from "../build/components/markdown-view.vue";
app.component(VcMarkdownView.name as string, VcMarkdownView);

import VcCodeSnippet from "../build/components/code-snippet.vue";
app.component(VcCodeSnippet.name as string, VcCodeSnippet);


import VcIconView from "./components/icon/src/icons.vue";
app.component(VcIconView.name as string, VcIconView);


import Icon from "./components/icon";
app.use(Icon);
app
  .use(store)
  .use(router)
  .mount("#app");
