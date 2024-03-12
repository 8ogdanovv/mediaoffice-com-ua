<template>
  <logo-span />

  <header class="header">
    <nav class="nav-bar">
      <menu class="nav-menu">
        <li>
          <logo-component />
        </li>
        <li class="type-writer">
          <router-link to="/about" class="type-writer">Компанія</router-link>
        </li>
        <li class="type-writer">
          <router-link to="/services" class="type-writer">Послуги</router-link>
        </li class="type-writer">
        <li class="type-writer">
          <router-link to="/contacts" class="type-writer">Контакти</router-link>
        </li>
        <li class="type-writer">
          <span class="type-writer">
            Телефони в Києві
          </span>
          <br />
          <a href="tel:+380444659844" class="nav-tel type-writer">+38 (044) 465-98-44</a>
          <br />
          <a href="tel:+380671009844" class="nav-tel type-writer">+38 (067) 100-98-44</a>
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

<style lang="scss">
.header {
  margin-top: 32px;
}

.nav-menu {
  padding: 35px 48px 25px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80dvw;
  margin: 0 auto;
  color: var(--color-black);
  background-color: var(--color-white);

  li:not(:first-of-type, :last-of-type) {
    border-left: 1px solid var(--color-red);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 51px;
  }

  li:not(:first-of-type) a {
    font-family: "Special Elite", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
  }

  li:last-of-type {
    padding-left: 18px;
    border-left: 1px #454f5b solid;
  }
}

.nav-tel {
  color: var(--color-red);
}
</style>
