import { createApp } from "vue";
import router from "@/router/index.js";
import App from "./App.vue";

import {useREM} from "@/utils/flexible.js";
import mylibs from "@/libs/index.js";
import "./styles/index.scss";
import 'virtual:svg-icons-register'
useREM()

createApp(App).use(router).use(mylibs).mount("#app");
