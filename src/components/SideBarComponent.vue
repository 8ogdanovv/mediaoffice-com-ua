<template>
  <ul class="links-bar links-bar-list side-bar">
    <li class="links-bar-li">
      <router-link
        to="/service/pos"
        class="link-bar-link"
        title="POS матеріали"
      >
        <h3 class="h3-title link1">
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
        <h3 class="h3-title link2">
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
        <h3 class="h3-title link3">
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
        <h3 class="h3-title link4">
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

.side-bar {
  display: grid;

  grid-template-rows: repeat(1fr, 4);

  & h3 {
    height: 10.5vh;
  }
}

h3 {
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

    filter: contrast(200%);

    animation-name: jump-right-four-infinite;
    animation-duration: 32s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-iteration-count: infinite;

    animation-delay: 0;
    -webkit-animation-delay: 0;
  }

  &.link1:not(:hover)::after {
    animation-delay: 10s;
    -webkit-animation-delay: 10s;
  }

  &.link2:not(:hover)::after {
    animation-delay: 20s;
    -webkit-animation-delay: 20s;
  }

  &.link3:not(:hover)::after {
    animation-delay: 30s;
    -webkit-animation-delay: 30s;
  }

  &.link4:not(:hover)::after {
    animation-delay: 40s;
    -webkit-animation-delay: 40s;
  }

  &.h3-title:hover::after {
    animation-name: jump-right;
    animation-duration: 6s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-iteration-count: infinite;

    animation-delay: 0 !important;
    -webkit-animation-delay: 0 !important;
  }
}
</style>