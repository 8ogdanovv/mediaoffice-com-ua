<template>
  <vueper-slides
    autoplay
    slide-image-inside
    ref="vueperslides1"
    @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
    :slide-ratio="1 / 1"
    :bullets="false"
    fixed-height="33vmin"
  >
    <vueper-slide
      v-for="i in 20"
      :key="i"
      :title="i.toString()"
      :image="`services/${i}.jpg`"
    />
  </vueper-slides>

  <vueper-slides
    ref="vueperslides2"
    :arrows="false"
    :slide-ratio="1 / 1"
    :dragging-distance="50"
    @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
    :visible-slides="3"
    fixed-height="10vmin"
  >
    <vueper-slide
      v-for="i in 20"
      :key="i"
      @click.native="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 1)"
      :title="i.toString()"
      :image="`services/${i}.jpg`"
    />
  </vueper-slides>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<style lang="scss">
.vueperslide__image {
  background-size: contain;
  height: 33vmin;
  background-repeat: no-repeat;
}
</style>