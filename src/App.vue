<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <header-component />

  <main class="main" :class="!$route.name ? 'grid-layout' : 'block-layout'">
    <router-view class="content"/>

    <aside class="side-bar" v-show="!$route.name">
      sidebar
    </aside>
  </main>

  <footer-component />
</template>

<style>
.grid-layout {
  display: grid;
  grid-template-columns: 5fr 2fr;
}

.block-layout {
  display: block;
}
</style>
