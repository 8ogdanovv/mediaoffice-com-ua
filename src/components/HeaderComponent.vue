<template>
  <header class="header">
    <div class="logos flex-wrap" :style="{ width: `${205 * logoCount}px` }">
      <span v-for="(visible, index) in logoVisibility" :key="index">
        <logo-component v-show="visible"/>
      </span>
    </div>

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
import { ref, onMounted, onUnmounted } from 'vue'
import LogoComponent from '@/components/LogoComponent.vue';

const logoCount = computeLogoCount();
const logoVisibility = ref(Array.from({ length: logoCount }, () => false));

function computeLogoCount() {
  const logoWidth = 201; // Width of each .logo element
  const viewportWidth = window.innerWidth; // Current viewport width

  // Compute the number of .logo elements based on viewport width
  return Math.ceil(viewportWidth / logoWidth);
}

function mountLogosStepByStep() {
  let index = 0;
  const interval = setInterval(() => {
    if (index < logoCount) {
      logoVisibility.value[index] = true;
      index++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

onMounted(() => {
  mountLogosStepByStep();
});

onUnmounted(() => {
  // Cleanup if needed
});
</script>

<style lang="scss">
.header {
  width: 100%;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

.logos {
  position: sticky;
  top: 0;
  left: 0;
  margin-bottom: 32px;
}

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
