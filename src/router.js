import { createRouter, createWebHistory } from 'vue-router';

const handleBeforeEnter = (to, from) => {
  const validServices = ['pos', 'print', 'promo', 'extra']
  const serviceName = to.params.serviceName
  const isInServices = validServices.some(( name ) => name === serviceName)

  if (!isInServices)
    return {
      name: '404',
      // preserve current path and remove the first char to avoid the target URL starting with `//`
      params: { pathMatch: to.path.substring(1).split('/'), previousPath: from },
      // preserve existing query and hash if any
      query: to.query,
      hash: to.hash,
    }
}

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
    path: '/service',
    children: [
      {
        path: ':serviceName', // Dynamic segment to capture the service type
        component: () => import('@/views/PosView.vue'), // Default import
        name: 'pos',
        beforeEnter: handleBeforeEnter,
      },
      {
        path: ':serviceName', // Dynamic segment to capture the service type
        component: () => import('@/views/PrintView.vue'), // Default import
        name: 'print',
        beforeEnter: handleBeforeEnter,
      },
      {
        path: ':serviceType', // Dynamic segment to capture the service type
        component: () => import('@/views/PromoView.vue'), // Default import
        name: 'promo',
        beforeEnter: handleBeforeEnter,
      },
      {
        path: ':serviceType', // Dynamic segment to capture the service type
        component: () => import('@/views/ExtraView.vue'), // Default import
        name: 'extra',
        beforeEnter: handleBeforeEnter,
      },
    ],
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
    component: () => import('@/views/NotFoundView.vue'),
    name: '404',
    props: (route) => ({
      previousPath: route.params.pathMatch && route.params.pathMatch.length > 0
        ? '/' +
          route.params.pathMatch.filter(
            (p) =>
              routes.find(({ path }) => path.slice(1) === p)
          )[0]
        : route.fullPath
        ? route.fullPath
        : '/',
    }), // Pass previousPath prop if coming from an existing route
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
