// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/IndexPage.vue'),
  },
  {
    name: 'error',
    path: '/error',
    component: () => import('@/pages/ErrorPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
