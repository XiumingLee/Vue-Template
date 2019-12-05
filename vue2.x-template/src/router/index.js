import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 静态路由
const constantRouterMap = [
    {
        path:'/',
        component:()=>import('@/views/home/Home.vue'),
        meta:{ title:'首页' },
        hidden: true
    }
]

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})