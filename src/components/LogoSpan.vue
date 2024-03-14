<template>
  <div class="logos flex-wrap" :style="{ width: `${201 * logoCount}px` }">
    <span v-for="(visible, index) in logoVisibility" :key="index">
      <logo-component v-show="visible"/>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LogoComponent from '@/components/LogoComponent.vue'


function computeLogoVisibility() {
  return Array.from({ length: logoCount.value }, () => false)
}

const logoCount = ref(computeLogoCount())
const logoVisibility = ref(computeLogoVisibility())

function computeLogoCount() {
  const logoWidth = 201 // Width of each .logo element
  const viewportWidth = window.innerWidth; // Current viewport width

  // Compute the number of .logo elements based on viewport width
  return Math.ceil(viewportWidth / logoWidth);
}

function mountLogosStepByStep() {
  let index = 0
  const interval = setInterval(() => {
    if (index < logoCount.value) {
      logoVisibility.value[index] = true;
      index++
    } else {
      clearInterval(interval);
    }
  }, 1000)
}

onMounted(() => {
  mountLogosStepByStep()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  logoCount.value = computeLogoCount()
  logoVisibility.value = computeLogoVisibility()
  mountLogosStepByStep()
}
</script>

<style lang="scss" scoped>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

.logos {
  position: sticky;
  top: 0;
}

@keyframes appearance {
  from {
    opacity: 0;
    left: 201px;
    transform: scale(2);
  }

  to {
    opacity: 1;
    left: 0;
    transform: scale(1);
  }
}

.logo {
  animation: appearance 1s;
}
</style>
