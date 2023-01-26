import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/:name',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchPoke.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavView.vue')
    },
  ]
})

export default router
