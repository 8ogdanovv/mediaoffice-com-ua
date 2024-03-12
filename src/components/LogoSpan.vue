<template>
  <div class="logos flex-wrap" :style="{ width: `${201 * logoCount}px` }">
    <span v-for="(visible, index) in logoVisibility" :key="index">
      <logo-component v-show="visible"/>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LogoComponent from '@/components/LogoComponent.vue'


function computeLogoCount() {
  const logoWidth = 201 // Width of each .logo element
  const viewportWidth = window.innerWidth // Current viewport width

  // Compute the number of .logo elements based on viewport width
  return Math.ceil(viewportWidth / logoWidth)
}

const logoCount = computeLogoCount()
const logoVisibility = ref(Array.from({ length: logoCount }, () => false))

function mountLogosStepByStep() {
  let index = 0
  const interval = setInterval(() => {
    if (index < logoCount) {
      logoVisibility.value[index] = true
      index++
    } else {
      clearInterval(interval);
    }
  }, 1000)
}

onMounted(() => mountLogosStepByStep())
</script>

<style lang="scss" scoped>
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

@keyframes appearance {
  from {
    opacity: 0;
    left: 26px;
  }

  to {
    opacity: 1;
    left: 0;
  }
}

.logo {
  animation: appearance 1s;
}
</style>