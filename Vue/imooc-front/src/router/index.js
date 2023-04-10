import { createRouter, createWebHistory } from "vue-router";
import {isMobileTerminal} from "@/utils/flexible.js";
import mobileRoutes from "@/router/modules/mobile-routes.js";
import pcRoutes from "@/router/modules/pc-routes.js";


const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value?pcRoutes:mobileRoutes,
});

export default router;
