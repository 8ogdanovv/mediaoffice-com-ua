<template>
  <header class="header">
    <logo-span />

    <nav class="nav-bar">
      <menu class="nav-menu">
        <li>
          <logo-component />
        </li>
        <li>
          <router-link to="/about">
            Компанія</router-link>
        </li>
        <li>
          <router-link to="/services">Послуги</router-link>
        </li>
        <li>
          <router-link to="/contacts">Контакти</router-link>
        </li>
      </menu>
    </nav>
  </header>
</template>

<script setup>
import LogoSpan from '@/components/LogoSpan.vue'
import LogoComponent from '@/components/LogoComponent.vue'
</script>

<style lang="scss">
.nav-menu {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 80dvw;
  margin: 0 auto;
  color: var(--color-black);
  background-color: var(--color-white);
}
</style>
