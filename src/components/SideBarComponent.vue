<template>
  <ul class="links-bar links-bar-list color-red-textShadow-black">
    <li class="links-bar-li">
      <router-link
        to="/service/pos"
        class="link-bar-link"
        title="POS матеріали"
      >
        <h3>
          <span class="white-bg">
            POS матеріали
          </span>
        </h3>
    `</router-link>
    </li>

    <li class="links-bar-li">
      <router-link
        to="/service/print"
        class="link-bar-link"
        title="Друк на тканині, рекламні матеріали"
      >
        <h3>
          <span class="white-bg">
            Друк на тканині, рекламні матеріали
          </span>
        </h3>
      </router-link>
    </li>

    <li class="link-bar-li">
      <router-link
        to="/service/promo"
        class="link-bar-link"
        title="Рекламна та сувенірна продукція"
      >
        <h3>
          <span class="white-bg">
            Рекламна та сувенірна продукція
          </span>
        </h3>
      </router-link>
    </li>

    <li class="links-bar-li">
      <router-link
        to="/service/extra"
        class="link-bar-link"
        title="Зовнішня реклама"
      >
        <h3>
          <span class="white-bg">
            Зовнішня реклама
          </span>
        </h3>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.links-bar {
  display: grid;
  grid-template-rows: repeat(4, 1fr);

  li {
    height: calc(var(--insane-height) / 4);

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
  height: 12.5vh;
  padding: 1rem;
  margin: 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  & .white-bg {
    background-color: #fffa;
    border-radius: 0.5rem;
  }

  font-size: 115%;
  position: relative;

  border-radius: 0.5rem;

  color: var(--color-red);

  &::after {
    position: absolute;
    content: '';
    bottom: -3vh;
    background: none;
    color: transparent;
    background-image: url('./../assets/arrow_1.gif');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: inline-block;
    width: 46px;
    height: 1.5vh;
    z-index: 1;

    filter: blur(0.5px) contrast(200%);
  }

  &:hover::after {
    animation: jump-right 6s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation: jump-right 6s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
}
</style>