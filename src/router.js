import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/requirements',
    component: () => import('@/views/RequirementsView.vue'),
  },
  {
    // Catch all routes that don't match the previous ones
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
    name: '404',
    props: route => ({
      previousPath: route.params.pathMatch.length > 0
        ? '/' + route.params.pathMatch.filter(
          p => routes.find(
            ({ path }) => path.slice(1) === p
          )
        )[0]
        : route.fullPath
          ? route.fullPath
          : '/'
    }), // Pass previousPath prop if coming from an existing route
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
