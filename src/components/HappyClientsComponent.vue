<template>
  <section class="content-absolute 25vh happy-clients-top-offset slider">
    <!-- Your content here -->
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
        v-for="(slide, idx) in slides"
        :key="idx"
        :content="slide.content"
      />
    </vueper-slides>
  </section>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const brands = [
  'Eva',
  'Fora',
  'FozzyGroup',
  'LOreal',
  'Maybelline',
  'Prostor',
  'Watsons',
];

const slides = brands.map(brand => ({
  content: `<div style="background: url('${brand}_logo.png'); background-size: contain; background-repeat: no-repeat; background-position: center;" class="content-image"></div>`
}));
</script>

<style lang="scss">
.slider {
  color: var(--color-red);
  padding-bottom: 0;
  border: none;
}

.vueperslides--fixed-height { height: 3vh; }

.vueperslide__content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
}

.content-image {
  height: 3vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
