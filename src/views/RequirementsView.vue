<template>
  <section class="Yaroslav-the-Wise">
    <router-link to="/contacts">
      ₴
    </router-link>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.Yaroslav-the-Wise {
  aspect-ratio: 1198 / 635;
  background-image: url('./../assets/Yaroslav-the-Wise.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    content: '';

    width: 100%;
    height: auto;
    aspect-ratio: 1198 / 635;
    background-image: url('./../assets/Yaroslav-the-Wise.jpg');
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::after {
    position: absolute;
    bottom: -100%;
    left: 0;
    content: '';

    width: 100%;
    height: auto;
    aspect-ratio: 1198 / 635;
    background-image: url('./../assets/Yaroslav-the-Wise.jpg');
    background-size: 400%;
    background-repeat: no-repeat;
    background-position: 43.5% 72%;
    height: 33%;

    filter: grayscale(1) contrast(2) invert(0);
  }
}
</style>