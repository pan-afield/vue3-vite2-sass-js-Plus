import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    // {
    //     // /search/screens -> /search?q=screens
    //     path: '/search/:searchText',
    //     redirect: to => {
    //       // 方法接收目标路由作为参数
    //       // return 重定向的字符串路径/路径对象
    //       return { path: '/search', query: { q: to.params.searchText } }
    //     },
    //   },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import("../components/NotFound.vue")
    },
    {
        path: '/',
        name: "Home",
        meta: {
            title: '首页',
            keepAlive: true
        },
        component: () => import("../pages/Home/Home.vue"),
    },
    {
        path: '/Person',
        name: "Person",
        meta: {
            title: 'Person',
            keepAlive: false
        },
        component: () => import("../pages/Person/Person.vue"),
        children: [
            {
                path: 'PersonChild',
                name: 'PersonChild',
                component: () => import("../components/PersonChild.vue")
            }
        ]
    },
    {
        path: '/HelloWorld',
        name: "HelloWorld",
        meta: {
            title: 'HelloWorld',
            keepAlive: false
        },
        component: () => import("../components/HelloWorld.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router