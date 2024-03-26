<template>
  <section class="call-to-action">
    <div class="text-box">
      <h2>
        ДОВІРТЕСЯ ПРОФЕСІОНАЛАМ!
      </h2>

      <p>
        Корпоративний одяг, термотрансфер, сублімація, шовкотрафарет,
        вивіски, таблички, покажчики, стійки, стенди, дисплеї...&nbsp;
        <router-link to="/company" class="company-link jump-right-on-hover" title="Докладніше про компанію">&nbsp;</router-link>
      </p>
    </div>
  </section>

  <section class="services">
    <h2>
      ПОСЛУГИ
    </h2>
    <p>
      УФ-друк на листових матеріалах, лазерне різання (гравіювання),
      термогибка пластику, фрезерне різання на ЧПУ,
      шовкотрафаретний друк, екосольвентний інтер'єрний друк,
      сольвентний широкоформатний друк Детальніше про компанію ->
    </p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.call-to-action {
  background-image: url('./../assets/bg_top.jpg');
  background-position: center;
  background-size: cover;
  aspect-ratio: 4 / 1;
  color: var(--color-white);
  display: flex;
}

.company-link {
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
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  padding: 0.625rem;
  gap: 0.625rem;
  line-height: 1.75;
}
</style>
