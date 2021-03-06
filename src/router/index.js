import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
   path: '/schedule', 
   name: 'Schedule',
   component: () => import('../views/Schedule.vue')
  },
  {
    path: '/registration', 
    name: 'Registration',
    component: () => import('../views/Registration.vue')
   },
   {
     path: '/rules', 
     name: 'Rules',
     component: () => import('../views/Rules.vue')
    },
    {
      path: '/contact', 
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/login', 
      name: 'Login',
      component: () => import('../views/Login.vue')
     },
     {
       path:'/chatroom/:id',
       name: 'Chatroom',
       component: () => import ('../views/Chatroom.vue')

     }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
