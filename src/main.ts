import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);

import VcMarkdownView from "./components/markdown-view.vue";
app.component(VcMarkdownView.name as string, VcMarkdownView);

import VcCodeSnippet from "./components/code-snippet.vue";
app.component(VcCodeSnippet.name as string, VcCodeSnippet);

app
  .use(store)
  .use(router)
  .mount("#app");
