<template>
  <section class="call-to-action">
    <div class="text-box">
      <h2>
        ДОВІРТЕСЯ ПРОФЕСІОНАЛАМ!
      </h2>

      <p>
        Корпоративний одяг, термотрансфер, сублімація, шовкотрафарет,
        вивіски, таблички, покажчики, стійки, стенди, дисплеї...&nbsp;
        <router-link to="/company" class="arrow-link jump-right-on-hover" title="Докладніше про компанію">&nbsp;</router-link>
      </p>
    </div>
  </section>

  <section class="services">
    <div class="text-box">
      <h2>
        ПОСЛУГИ
      </h2>
      <p>
        УФ-друк на листових матеріалах, лазерне різання (гравіювання),
        термогибка пластику, фрезерне різання на ЧПУ,
        шовкотрафаретний друк, екосольвентний інтер'єрний друк,
        сольвентний широкоформатний друк&nbsp;
        <router-link to="/services" class="arrow-link jump-right-on-hover" title="Докладніше про послуги">&nbsp;</router-link>
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.call-to-action,
.services {
  background-image: url('./../assets/bg_top.jpg');
  background-position: center;
  background-size: cover;
  aspect-ratio: 4 / 1;
  color: var(--color-white);
  display: flex;
  max-height: 20vh;
  width: 100%;
}

.call-to-action {
  background-image: url('./../assets/bg_top.jpg');
}

.services {
  background-image: url('./../assets/bg_bottom.png');
}

.services h2 {
  color: var(--color-red);
}

@keyframes moving-shine {
  0% {}
  50% {}
  75% {}
  100% {}
}

.call-to-action:hover {
  animation: moving-shine 7.5s infinite;
}

.arrow-link {
  background: none;
  color: transparent;
  background-image: url('./../assets/arrow.gif');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: inline-block;
  width: 46px;
}

.text-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.625rem;
  margin-left: 5vmax;
  gap: 0.625rem;
  line-height: 1.75;
}
</style>
