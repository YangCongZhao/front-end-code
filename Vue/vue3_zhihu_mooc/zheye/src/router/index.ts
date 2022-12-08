import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: layout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
