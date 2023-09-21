import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect: '/home',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/resetpwd',
      component: () => import('@/views/Resetpwd/index.vue')
    }
  ]
})

export default router
