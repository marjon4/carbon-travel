<template>
  <nav>
    <router-link class="routerlink" active-link="active" to="form"
      >Form</router-link
    >
    <router-link class="routerlink" active-link="active" to="result"
      >Result</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap");

nav {
  background-color: #fff;
  top: 0;
  display: flex;
  height: 85px;
  left: 0;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
}

.routerlink {
  font-family: "Mulish", "san-serif";
  color: black;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}
</style>
