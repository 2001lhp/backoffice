import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/resetpwd',
      component: () => import('@/views/Resetpwd/index.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/Home/index.vue')
    }
  ]
})

export default router
