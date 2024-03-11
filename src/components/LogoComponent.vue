<template>
  <a
    to="/"
    class="logo"
    width="201"
    height="26"
  >
    <em class="media">
      Медіа
    </em>
    <span class="office">
      <span class="o">О</span>
      <span class="f">Ф</span>
      <span class="i">І</span>
      <span class="s">С</span>
    </span>
  </a>
</template>

<style>
@keyframes rotate-hor {
  from {
    -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
  }
  to {
    -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
  }
}

@keyframes rotate-hor-loop {
  0% {
    -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
    transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(0);
  }
  10% {
    -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
  }
  20% {
    -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
  }
  100% {
    -webkit-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -moz-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -o-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    -ms-transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
    transform: skew(-1deg) scale(1.1, 0.95) translate(4%, -2%) rotateX(1turn);
  }
}

@keyframes rotate-ver {
  from {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  to {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
}

@keyframes rotate-ver-loop-o {
  0% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  10% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
  100% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
}

@keyframes rotate-ver-loop-f {
  0% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  5% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  15% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
  100% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
}

@keyframes rotate-ver-loop-i {
  0% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  10% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  20% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
  100% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
}

@keyframes rotate-ver-loop-s {
  0% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  15% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(0);
    transform: scale(1, 1.7) translateY(-0) rotateY(0);
  }
  25% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
  100% {
    -webkit-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -moz-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -o-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    -ms-transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
    transform: scale(1, 1.7) translateY(-0) rotateY(1turn);
  }
}

.logo {
  width: 201px;
  height: 26px;
  background-color: var(--color-white);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 900;
  font-optical-sizing: auto;
  filter: blur(0.5px);
  cursor: pointer;
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
  line-height: 70%;
  border: 1px solid var(--color-red);
  border-top: 0;
  border-bottom: 0;
  display: inline-block;
  padding: 0 3px;
  font-size: larger;
  -webkit-transform: scale(1, 1.7) translateY(-0);
  -moz-transform: scale(1, 1.7) translateY(-0);
  -o-transform: scale(1, 1.7) translateY(-0);
  -ms-transform: scale(1, 1.7) translateY(-0);
  transform: scale(1, 1.7) translateY(-0);
  text-align: center;
}

.f {
  width: 21px;
}
.i {
  width: 15px;
}

.office > *:not(:last-of-type) {
  margin-right: -1px;
}

.logo .media {
  animation: rotate-hor-loop 10s infinite;
}

.logo .o {
  animation: rotate-ver-loop-o 10s infinite;
}

.logo .f {
  animation: rotate-ver-loop-f 10s infinite;
}

.logo .i {
  animation: rotate-ver-loop-i 10s infinite;
}

.logo .s {
  animation: rotate-ver-loop-s 10s infinite;
}

.logo:hover .media {
  animation: rotate-hor 1s;
}

.logo:hover .o {
  animation: 1s rotate-ver;
}
.logo:hover .f {
  animation: 1s rotate-ver 0.5s;
}
.logo:hover .i {
  animation: 1s rotate-ver 1s;
}
.logo:hover .s {
  animation: 1s rotate-ver 1.5s;
}

</style>
