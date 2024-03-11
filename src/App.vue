<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <header-component />
  <router-view class="main"/>
  <footer-component />
</template>
