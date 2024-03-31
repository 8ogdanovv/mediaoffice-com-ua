<template>
  <section class="call-to-action">
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

  <section class="services">
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
import LinksBar from '@/components/LinksBar.vue'
</script>

<style lang="scss" scoped>
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

@keyframes moving-shine {
  0% {
    background: linear-gradient(35deg, transparent 0%, var(--color-shine) 49%, var(--color-shine) 51%, transparent 100%);
    transform: translateX(-50%);
  }
  50% {
    background: linear-gradient(35deg, transparent 0%, var(--color-shine) 49%, var(--color-shine) 51%, transparent 100%);
    transform: translateX(0%);
  }
  100% {
    background: linear-gradient(35deg, transparent 0%, var(--color-shine) 49%, var(--color-shine) 51%, transparent 100%);
    transform: translateX(-50%);
  }
}

.call-to-action::after {
  position: absolute;
  content: '';
  width: 300%;
  height: 17.5vh;
  top: 0;
  left: 0;
  animation: moving-shine 7.5s infinite;
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
  gap: 0.125rem;
  line-height: 1.25;
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
