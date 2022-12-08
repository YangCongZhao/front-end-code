import {createWebHashHistory,createRouter} from "vue-router";
const routes = [
    {
        path: '/',
        component: () => import('@/views/Home/Home.vue')
    }

]

export default createRouter({
    history:createWebHashHistory(),
    routes
})
