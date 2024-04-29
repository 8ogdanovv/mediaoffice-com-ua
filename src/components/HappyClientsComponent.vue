<template>
  <section class="content-absolute 25vh top40vh slider">
    Заради брендової впізнаваності,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;бізнесової ефективності і<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;рекламно-промоційної експресивності,<br />
    ми створюємо, втілюємо та розширюємо можливості.<br />

    Завдяки амбітній рішучості,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;стабільній якості і<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;професійній техніці,<br />
    нас обирають, радять, нам довіряють, з нами лишаються:

    <vueper-slides
      class="no-shadow"
      transition-speed="1000"
      :bullets="false"
      :arrows="false"
      :fixed-height="true"
      :autoplay="true"
    >
      <vueper-slide
        v-for="brand, idx in [`L'Oreal`, 'Maybelline','Eva']"
        :key="idx"
        :title="brand"
        :style="'background-color: ' + ['#ff5252', '#42b983'][idx % 2]"
      />
    </vueper-slides>
  </section>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>

<style lang="scss" scoped>
.slider {
  color: white;
  background: black;

  &::before {
    position: absolute;
    top: 0;
    content: 'SLIDER';
    color: #8888;
    font-size: 15vh;
  }
}

.vueperslides--fixed-height { height: 4.5vh; }
</style>