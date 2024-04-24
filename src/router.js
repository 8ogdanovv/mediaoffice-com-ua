import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'МедіаОфіс',
    },
  },
  {
    path: '/company',
    component: () => import('@/views/CompanyView.vue'),
    meta: {
      title: 'Про компанію | МедіаОфіс',
    },
  },
  {
    path: '/services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'УФ-друк, лазерне різання, гравірування, згинання пластику, екосольвентний і сольвентний друк | МедіаОфіс',
    },
  },
  {
    path: '/service/pos',
    component: () => import('@/views/PosView.vue'),
    name: 'pos',
    meta: {
      title: 'POS-матеріали | МедіаОфіс',
    },
  },
  {
    path: '/service/print',
    component: () => import('@/views/PrintView.vue'),
    name: 'print',
    meta: {
      title: 'Друк на тканині, рекламні матеріали | МедіаОфіс',
    },
  },
  {
    path: '/service/promo',
    component: () => import('@/views/PromoView.vue'),
    name: 'promo',
    meta: {
      title: 'Рекламна та сувенірна продукція | МедіаОфіс',
    },
  },
  {
    path: '/service/extra',
    component: () => import('@/views/ExtraView.vue'),
    name: 'extra',
    meta: {
      title: 'Зовнішня реклама | МедіаОфіс',
    },
  },
  {
    path: '/contacts',
    component: () => import('@/views/ContactsView.vue'),
    meta: {
      title: 'Контакти | МедіаОфіс',
    },
  },
  {
    path: '/requirements',
    component: () => import('@/views/RequirementsView.vue'),
    meta: {
      title: 'Вимоги до макетів | МедіаОфіс',
    },
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

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
