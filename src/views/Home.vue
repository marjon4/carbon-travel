<template>
  <Banner />
  <Form />
</template>

<script>
import Form from "./Form.vue";
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  components: {
    Form,
    Banner,
  },
};
</script>
