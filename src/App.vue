<script setup>
import logo from '@/assets/logo.gif'
</script>

<template>
 <h1>МедіаОфіс</h1>
 <a href="http://mediaoffice.com.ua/">
  <img :src="logo" border="0" alt="МедіаОфис" width="201" height="26">
 </a>
 <div class="logo" width="201" height="26">
    <em class="media">
      Медіа
    </em>
    <span class="office">
      <span class="o">О</span>
      <span class="f">Ф</span>
      <span class="i">І</span>
      <span class="s">С</span>
    </span>
 </div>
</template>

<style scoped>
.logo {
  width: 201px;
  height: 26px;
  background-color: var(--color-white);
  position: relative;
  text-transform: uppercase;
  font-weight: 900;
  font-optical-sizing: auto;
  filter: blur(0.5px);
}

.media {
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  color: var(--color-red);
  font-size: 32px;
  line-height: 1;
  margin-top: -5px;
  display: block;
  -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%);
  -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%);
  -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%);
  -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%);
  transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%);
}

.office {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-black);
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  height: inherit;
  overflow: hidden;
}

.office > * {
  border: 1px solid var(--color-red);
  border-top: 0;
  border-bottom: 0;
  display: inline-block;
  padding: 0 3.5px;
  font-size: larger;
  -webkit-transform: scaleY(1.7) translateY(-5%);
  -moz-transform: scaleY(1.7) translateY(-5%);
  -o-transform: scaleY(1.7) translateY(-5%);
  -ms-transform: scaleY(1.7) translateY(-5%);
  transform: scaleY(1.7) translateY(-5%);
}

.office > *:not(:last-of-type) {
  margin-right: -1px;
}

</style>
