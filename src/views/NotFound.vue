<template>
  <main>
    <p>404</p>
    <p>Цей маршрут '{{ routePath }}' не має кінцевого призначення, але зворотній шлях продовжує існувати.</p>
    <p>Ось він, &mdash; <router-link :to="previousPath">{{ previousPath }}</router-link></p>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const routePath = route.path ?? 'unknown' // Fallback to 'unknown' if route.path is undefined
const { previousPath } = defineProps(['previousPath'])
</script>

<style lang="scss" scoped></style>
