import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router).use(ElementPlus);

app.component("el-icon");
app.component("close");

app.mount("#app");
