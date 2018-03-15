import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/Home')
        },

        {
            path: '/users',
            name: 'Users',
            component: () => import('@/pages/Users')
        },

        {
            path: '/edit/:id',
            name: 'Edit',
            component: () => import('@/pages/Edit')
        },

        {
            path: '/user/add',
            name: 'UserAdd',
            component: () => import('@/pages/UserAdd')
        }
    ]
})
