import { createApp } from "vue";
import "normalize.css";
import "./assets/main.css";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
