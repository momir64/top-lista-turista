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
  {
    path: '/admin_panel/agencije',
    component: () => import('@/pages/AdminPage.vue'),
  },
  {
    path: '/admin_panel',
    redirect: '/admin_panel/agencije',
  },
  {
    path: '/admin_panel/korisnici',
    component: () => import('@/pages/KorisniciPage.vue'),
  },
  {
    path: '/admin_panel/agencija/:id?',
    component: () => import('@/pages/EditAgencijaPage.vue'),
  },
  {
    path: '/admin_panel/destinacija/:agencijaId?/:id',
    component: () => import('@/pages/EditDestinacijaPage.vue'),
  },
  {
    path: '/admin_panel/destinacija/:agencijaId',
    component: () => import('@/pages/EditDestinacijaPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error'
  },
]

const router = createRouter({
  // base: process.env.NODE_ENV === 'production' ? '/tlt/' : '/',
  history: createWebHistory(process.env.BASE_URL),   // process.env.NODE_ENV === 'production' ? '/tlt/' : '/'
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
