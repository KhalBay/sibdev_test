import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "@/store/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {auth: false},
      component: () => import('@/pages/LoginPage.vue')
    },
    {
      path: '/search',
      name: 'search',
      meta: {auth: true},
      component: () => import('@/pages/SearchPage.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      meta: {auth: true},
      component: () => import('@/pages/FavoritePage.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const requiredAuth = to.matched.some(el => el.meta.auth)

  if (requiredAuth && !store.isAuth) {
    next('/')
  } else {
    next()
  }
})

export default router
