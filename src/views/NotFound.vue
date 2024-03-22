<template>
  <p>404</p>
  <p>Цей маршрут '{{ routePath }}' не має кінцевого призначення, але зворотній шлях продовжує існувати.</p>
  <p>
    Ось він, &mdash;&nbsp;
    <router-link :to="previousPath">
      {{
        previousPath !== '/undefined'
          ? previousPath
          : ['/company', '/services', '/contacts', '/requirements'].filter(
            r => $route.fullPath.startsWith(r))[0]
      }}
      {{ console.log($route) }}
    </router-link>
  </p>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const routePath = route.path ?? 'unknown' // Fallback to 'unknown' if route.path is undefined
const { previousPath } = defineProps(['previousPath'])
</script>

<style lang="scss" scoped>
/* Add your custom styles here */
</style>
