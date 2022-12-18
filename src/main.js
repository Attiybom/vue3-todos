import { createApp } from "vue";
import "normalize.css";
import "./assets/main.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import { createPinia } from "pinia";



import App from "./App.vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(createPinia());
app.mount("#app");
