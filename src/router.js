import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/company',
    component: () => import('@/views/CompanyView.vue'),
  },
  {
    path: '/services',
    component: () => import('@/views/ServicesView.vue'),
  },
  {
    path: '/contacts',
    component: () => import('@/views/ContactsView.vue'),
  },
  {
    path: '/loader',
    component: () => import('@/components/LoaderComponent.vue'),
  },
  {
    // Catch all routes that don't match the previous ones
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router