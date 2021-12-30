<template>
  <nav>
    <router-link class="routerlink" active-link="active" to="/"
      >Home</router-link
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

nav {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  top: 0;
  display: flex;
  height: 47px;
  left: 0;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
}

.routerlink {
  color: #09383B;
  padding: 10px;
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}
</style>
