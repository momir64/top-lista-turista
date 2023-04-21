// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/IndexPage.vue'),
  },
  {
    path: '/error',
    component: () => import('@/pages/ErrorPage.vue'),
  },
  {
    path: '/agencija/:naziv',
    component: () => import('@/pages/AgencijaPage.vue'),
  },
  {
    path: '/destinacija/:naziv',
    component: () => import('@/pages/DestinacijaPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
    // ne radi jer ne može da skroluje dok još nije učitano
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0 }
    // }
  },
})
export default router
