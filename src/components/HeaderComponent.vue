<template>
  <header>
    <a href="http://mediaoffice.com.ua/">
      <img :src="logo" border="0" alt="МедіаОфис" width="201" height="26">
    </a>
    <logo-component />
  </header>
</template>

<script setup>
import logo from '@/assets/logo.gif';
import LogoComponent from '@/components/LogoComponent.vue';
</script>

<style lang="scss" scoped>
</style>