<template>
  <div class="banner">
    <div class="banner__box">
      <h1>Carbon Travel</h1>
      <p>
        What is your carbon footprint? Consumers and business are getting more
        conscious regarding their carbon footprint. Would you like to know your
        footprint while traveling with work? Continue down
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  background-image: url("../assets/banner.jpg");
  min-height: 430px;
  background-size: contain;
  display: flex;
  justify-content: center;
  margin-bottom: 15%;
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
  margin: 45px 0;
}

p {
  padding: 0 70px;
}
</style>
