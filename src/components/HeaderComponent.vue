<template>
  <header class="header">
    <nav class="nav-bar">
      <menu class="nav-menu red-shadowed">
        <li>
          <logo-component />
        </li>
        <li>
          <router-link to="/company" class="underline">Компанія</router-link>
        </li>
        <li>
          <router-link to="/services" class="underline">Послуги</router-link>
        </li class="type-writer">
        <li>
          <router-link to="/contacts" class="underline">Контакти</router-link>
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
import LogoComponent from '@/components/LogoComponent.vue'
</script>

<style lang="scss" scoped>
.nav-menu {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  align-items: center;
  margin: 0 auto;
  padding: 0;

  li:not(:first-of-type, :last-of-type) {
    border-left: 1px solid var(--color-red);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 22.5px;
  }

  li:last-of-type {
    border-left: 1px solid var(--color-gray);
    padding-left: 1rem;
  }

  li:not(:first-of-type :last-of-type) {
    justify-self: center;
  }
}

.logo {
  margin: 0;
  position: relative;
  top: 3px;
}

.nav-tel {
  color: var(--color-red) !important;
}
</style>
