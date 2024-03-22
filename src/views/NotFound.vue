<template>
  <p>404</p>
  <p>
    Цей маршрут '{{ routePath }}' не має кінцевого призначення, але зворотній
    шлях продовжує існувати.
  </p>
  <p>
    Ось він, &mdash;&nbsp;
    <router-link :to="previousPath">
      {{
        previousPath !== '/undefined'
          ? previousPath
          : availableRoutes.find(route => $route.fullPath.startsWith(route))
      }}
    </router-link>
  </p>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const routePath = route.path ?? 'unknown' // Fallback to 'unknown' if route.path is undefined
const { previousPath } = defineProps(['previousPath'])

const availableRoutes = ['/company', '/services', '/contacts', '/requirements']
</script>

<style lang="scss" scoped></style>
