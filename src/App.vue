<script setup>
import LogoSpan from '@/components/LogoSpan.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHomeOr404 = computed(() =>
  route.name === 'home' || route.name === '404'
)
</script>

<template>
  <logo-span />

  <div class="box-shadow">
    <header-component />

    <main class="main" :class="!isHomeOr404 ? 'grid-layout' : 'block-layout'">
      <router-view class="content"/>

      <aside class="side-bar" v-show="!isHomeOr404">
        sidebar
      </aside>
    </main>

    <footer-component />
  </div>
</template>

<style>
.grid-layout {
  display: grid;
  grid-template-columns: 5fr 2fr;

  grid-template-rows: 20vh 1fr 20vh;
}

.block-layout {
  display: block;
}

.box-shadow {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: calc(100vh - 2.5rem - 29px - 32px - 2px);
  position: absolute;
  top: 61px;
  box-shadow: 0 0 1.25rem var(--color-shadow);
}
</style>
