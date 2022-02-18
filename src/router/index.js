/*
 * @Author: your name
 * @Date: 2022-02-14 11:48:20
 * @LastEditTime: 2022-02-14 13:29:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/router/index.js
 */
import Vue from 'vue'
import Router from "vue-router"
Vue.use(Router);

const router = [
    {
        path: '/',
        name: "Layout",
        component: () => import('@/components/Layout')
    }
]


export default new Router({
    mode: 'history',
    routes: router,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(savedPosition)
                }, 500);
            })
        } else {
            return { x: 0, y: 0 }
        }
    }
})
