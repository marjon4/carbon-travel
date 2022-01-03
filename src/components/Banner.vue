<template>
  <div class="banner">
    <div class="banner__box">
      <h1 data-test="bannerHeader">Carbon Travel</h1>
      <p>
        What is your carbon footprint? Consumers and businesses are getting more
        conscious of their carbon footprint. Transportation is the second largest source of carbon dioxide emissions looking at the average consumption based emissions per year and citizen in Sweden.
        Therefore, overlooking the way we travel can really affect our total environmental impact.
        Would you like to know your footprint while traveling with work? Continue down and fill out the form
      </p>
    </div>
    <Scroll />
  </div>
</template>

<script>
import Scroll from "./Scroll.vue";

export default {
  name: "Banner",
  components: {
    Scroll,
  },
};
</script>

<style scoped>
.banner {
  background-image: url("../assets/banner.jpg");
  min-height: 490px;
  height: 70vh;
  background-size: contain;
  display: flex;
  justify-content: center;
  margin-bottom: 15%;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: #fff;
}

.banner__box {
  height: inherit;
  width: 645px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 10px;
  margin-top: 30px;
}

p {
  padding: 0 70px;
  text-align: left;
}
</style>
