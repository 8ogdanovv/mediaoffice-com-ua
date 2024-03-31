<template>
  <p>404</p>
  <p>
    Цей маршрут '{{ routePath }}' не має кінцевого призначення, але...<br />
    ...зворотній шлях продовжує існувати.
  </p>
  <p>
    Ось він, &mdash;&nbsp;
    <router-link :to="backRoutePath">
      {{ backRoutePath }}
    </router-link>
  </p>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const routePath = route.path ?? 'unknown' // Fallback to 'unknown' if route.path is undefined
const { previousPath } = defineProps(['previousPath'])
const availableRoutes = [
  '/company',
  '/services',
  '/service/pos',
  '/service/print',
  '/service/promo',
  '/service/extra',
  '/contacts',
  '/requirements'
]

const backRoutePath =
  previousPath === '/undefined' || previousPath === '/service'
    ? availableRoutes.find(route => routePath.startsWith(route)) : previousPath
</script>

<style lang="scss" scoped></style>
