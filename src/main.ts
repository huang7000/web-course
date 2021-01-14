import { createApp } from "vue";
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


import VcIconView from "./views/icons.vue";
//app.component(VcIconView.name as string, VcIconView);
import Icon from "./components/icon";
app.use(Icon);
app
  .use(store)
  .use(router)
  .mount("#app");
