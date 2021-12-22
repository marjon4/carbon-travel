<template>
  <div id="scroll" class="scroll__indicator">
    <a @click="scrollTo()"><span></span>Scroll down</a>
  </div>
</template>
<script>
export default {
  name: "Scroll",
  methods: {
    scrollTo() {
      const form = document.getElementsByTagName("form")[0];
      form.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.scroll__indicator {
  z-index: 10;
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 155px;
}

.scroll__indicator::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 80%;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
.scroll__indicator a {
  position: absolute;
  bottom: 20px;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 Avenir, Helvetica, Arial, sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
  cursor: pointer;
}
.scroll__indicator a:hover {
  opacity: 0.5;
}

.scroll__indicator a {
  padding-top: 60px;
}
.scroll__indicator a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb04 2s infinite;
  animation: sdb04 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb04 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb04 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
</style>
