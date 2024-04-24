<template>
  <section class="call-to-action head-line">
    <div class="text-box">
      <h2>
        ДОВІРТЕСЯ ПРОФЕСІОНАЛАМ!
      </h2>

      <p class="text-link">
        <router-link to="/company" title="Докладніше про компанію">
          Корпоративний одяг, термотрансфер, сублімація, шовкотрафарет,
          вивіски, таблички, покажчики, стійки, стенди, дисплеї...&nbsp;
          <span class="arrow jump-right-on-hover">
            &nbsp;
          </span>
        </router-link>
      </p>
    </div>
  </section>

  <links-bar />

  <section class="services foot-line">
    <div class="text-box">
      <h2>
        ПОСЛУГИ
      </h2>
      <p class="text-link">
        <router-link to="/services" title="Докладніше про послуги">
          УФ-друк на листових матеріалах, лазерне різання (гравіювання),
          термогибка пластику, фрезерне різання на ЧПУ,
          шовкотрафаретний друк, екосольвентний інтер'єрний друк,
          сольвентний широкоформатний друк&nbsp;
          <span class="arrow jump-right-on-hover" >&nbsp;</span>
        </router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import LinksBar from '@/components/LinksBarComponent.vue'
</script>

<style lang="scss" scoped>
h2 {
  position: relative;
  top: -0.333rem;
}

.call-to-action,
.services {
  background-image: url('./../assets/bg_top.jpg');
  background-position: center;
  background-size: cover;
  aspect-ratio: 4 / 1;
  color: var(--color-white);
  display: flex;
  height: 17.5vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.call-to-action {
  background-image: url('./../assets/bg_top.jpg');
}

.services {
  background-image: url('./../assets/bg_bottom.png');
}

.services h2 {
  color: var(--color-red);
  margin: 0;
}

.text-box {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.25rem;
  margin-left: 5vmax;
  line-height: 1.25;
  z-index: 1;

  h2 {
    margin: -0.25rem 0;
  }
}

.text-link * {
  background: transparent;
  color: var(--color-white);
  cursor: pointer;
}

.arrow {
  background: none;
  color: transparent;
  background-image: url('./../assets/arrow.gif');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: inline-block;
  width: 46px;
}
</style>
