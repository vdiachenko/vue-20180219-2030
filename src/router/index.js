import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Users from '@/pages/Users'
import Edit from '@/pages/Edit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/users',
            name: 'Users',
            component: Users
        },

        {
            path: '/edit/:id',
            name: 'Edit',
            component: Edit
        }
    ]
})
