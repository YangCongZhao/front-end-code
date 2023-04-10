import { createApp } from "vue";
import router from "@/router/index.js";
import App from "./App.vue";
import "./styles/index.scss";

createApp(App).use(router).mount("#app");
