<template>
  <ul class="links-bar links-bar-list">
    <li class="links-bar-li">
      <router-link
        to="/service/pos"
        class="link-bar-link"
        title="POS матеріали"
      >
        <h3>
          POS матеріали
        </h3>

        <ul class="links-bar-sublist">
          <li>Стелажі</li>
          <li>Промо-столи (презентаційні столи)</li>
          <li>Шелфтокери</li>
          <li>Воблери</li>
          <li>Цінникотримачі</li>
          <li>Дисплеї, диспенсери</li>
          <li>Стенди</li>
          <li>Макети продукції (джумби)</li>
          <li>Палетні бар’єри</li>
          <li>Нестандартні рішення</li>
        </ul>
    </router-link>
    </li>

    <li class="links-bar-li">
      <router-link
        to="/service/print"
        class="link-bar-link"
        title="Друк на тканині, рекламні матеріали"
      >
        <h3>
          Друк на тканині, рекламні матеріали
        </h3>

        <ul class="links-bar-sublist">
          <li>Брендування промо-форми (промо-матеріалів)</li>
          <li>Брендування спортивної форми</li>
          <li>Індивідуальний пошив рекламного одягу</li>
          <li>Намети</li>
        </ul>
      </router-link>
    </li>

    <li class="link-bar-li">
      <router-link
        to="/service/promo"
        class="link-bar-link"
        title="Рекламна та сувенірна продукція"
      >
        <h3>
          Рекламна та сувенірна продукція
        </h3>

        <ul class="links-bar-sublist">
          <li>Паперові пакети</li>
          <li>Магніти</li>
        </ul>
      </router-link>
    </li>

    <li class="links-bar-li">
      <router-link
        to="/service/extra"
        class="link-bar-link"
        title="Зовнішня реклама"
      >
        <h3>
          Зовнішня реклама
        </h3>

        <ul class="links-bar-sublist">
          <li>Інформаційні дошки, таблички, вивіски</li>
          <li>Лайтбокси</li>
          <li>Об'ємні букви</li>
          <li>Штендери</li>
          <li>Рекламні пластикові коробки</li>
          <li>Оформлення місць продажів</li>
          <li>Брендування банкоматів</li>
        </ul>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.links-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 80%;
  height: 32vh;

  li {
    &:first-of-type h3 {
      background-image: url('./../assets/pict_1.jpg');
    }

    &:nth-of-type(2) h3 {
      background-image: url('./../assets/pict_2.jpg');
    }

    &:nth-of-type(3) h3 {
      background-image: url('./../assets/pict_3.jpg');
    }

    &:last-of-type h3 {
      background-image: url('./../assets/pict_4.jpg');
    }
  }

  li:not(:last-of-type) h3 {
    margin-right: 0.5rem;
    width: calc(100% - 0.5rem);
  }

  li:last-of-type h3 {
    width: 100%;
  }
}

h3 {
  height: 7vh;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: var(--color-white);
  text-shadow: 0 0 8px var(--color-black);
}
</style>