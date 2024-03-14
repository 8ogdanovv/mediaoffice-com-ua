<template>
  <logo-span />

  <header class="header">
    <nav class="nav-bar">
      <menu class="nav-menu">
        <li>
          <logo-component />
        </li>
        <li>
          <router-link to="/company">Компанія</router-link>
        </li>
        <li>
          <router-link to="/services">Послуги</router-link>
        </li class="type-writer">
        <li>
          <router-link to="/contacts">Контакти</router-link>
        </li>
        <li>
          <span>
            Телефони в Києві
          </span>
          <br />
          <a href="tel:+380444659844" class="nav-tel">+38 (044) 465-98-44</a>
          <br />
          <a href="tel:+380671009844" class="nav-tel">+38 (067) 100-98-44</a>
          <br />
        </li>
      </menu>
    </nav>
  </header>
</template>

<script setup>
import LogoSpan from '@/components/LogoSpan.vue'
import LogoComponent from '@/components/LogoComponent.vue'
</script>

<style lang="scss" scoped>
.header {
  margin-top: 32px;
}

.logo {
  margin: 0;
  position: relative;
  top: 5%;
}

.nav-menu {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 2fr;
  justify-content: center;
  align-content: center;

  width: 80dvw;
  margin: 0 auto;
  padding: 1rem;
  color: var(--color-black);
  background-color: var(--color-white);

  li:not(:first-of-type, :last-of-type) {
    border-left: 1px solid var(--color-red);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
  }

  li:last-of-type {
    border-left: 1px #454f5b solid;
  }
}

.nav-tel {
  color: var(--color-red) !important;
}
</style>
