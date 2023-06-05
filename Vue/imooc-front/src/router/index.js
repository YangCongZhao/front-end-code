import {createRouter, createWebHistory} from "vue-router";
import {isMobileTerminal} from "@/utils/flexible.js";
import {mobileRoutes} from "@/router/mobile-routes.js";
import {pcRoutes} from "@/router/pc-routes.js";


const router = createRouter({
    history:createWebHistory(),
    routes:isMobileTerminal.value ?mobileRoutes:pcRoutes
})
export default router