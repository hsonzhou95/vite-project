/*
 * @Author: your name
 * @Date: 2021-05-12 09:59:27
 * @LastEditTime: 2021-05-12 10:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bondc:\Users\LENOVO\Desktop\vite-project\src\router\index.js
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes = [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/vuex',
            name: 'Vuex',
            component: Vuex
        },
        {
            path: '/axios',
            name: 'Axios',
            component: () => import('@/views/axios.vue') // 懒加载组件
        }

    ]

})
export default router