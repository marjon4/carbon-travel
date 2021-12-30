<template>
  <main>
    <form @submit.prevent="onSubmit">
      <h1>
        Enter start and end destination and number of passengers to see
        recommended mode of transport
      </h1>
      <p v-if="errors.length" class="form-errors" role="alert">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="'error-' + index">{{ error }}</li>
        </ul>
      </p>
      <label for="start">Start destination: </label>
      <select id="start" v-model="form.start">
        <option disabled value="">Select an option</option>
        <option v-for="startOption in startOptions" :key="startOption">
          {{ startOption }}
        </option>
      </select>
      <label for="end">End destination: </label>
      <select id="end" v-model="form.end">
        <option disabled value="">Select an option</option>
        <option v-for="endOption in endOptions" :key="endOption">
          {{ endOption }}
        </option>
      </select>
      <label for="passengers">Passengers: </label>
      <input type="number" id="passengers" v-model="form.passengers" />
      <button type="button" @click="onSubmit()">Calculate</button>
    </form>
  </main>
</template>

<script>
import http from '../http-common.js';

export default {
  name: "Form",
  data() {
    return {
      form: {},
      startOptions: ["Stockholm", "Göteborg", "Malmö"],
      endOptions: ["Oslo", "Berlin", "London"],
      errors: []
    };
  },
  methods: {
    onSubmit: async function () {
      this.checkForm();
        if (!this.errors.length) {
        const res = await http.post("/calculate", this.form)
          .then(({ data }) => {
            return data
          })
          .catch(error => console.log(error));
        if(res){
          this.$store.commit('setResult', res);
          this.$store.commit('setForm', this.form);
          this.$router.push({ name: 'Result' })
        }
      }
    },
    checkForm: function () {
      this.errors = [];
      if (this.form.start != '' && this.form.end != '' && this.form.passengers > 0) {
        return true;
      }
      if (this.form.start === '') {
        this.errors.push('Start destination required.');
      }
      if (this.form.end === '') {
        this.errors.push('End destination required.');
      }
      if (this.form.passengers === 0) {
        this.errors.push('Number of passengers required.');
      }
    }
  },
  mounted() {
    if(this.$store.state.form)
      this.form = this.$store.state.form;
  }
};
</script>

<style scoped>
main {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
}
form {
  padding: 0 25px 15% 25px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  max-width: 620px;
}
.form-errors {
  color: #3b0c09;
}
label {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
}
select,
input {
  border: 1px solid #09383B;
  color: #666666;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}
select:focus, input:focus, button:focus {
  box-shadow: 0 0 5px #09383B;
  outline: none;
}
button {
  margin-top: 20px;
  background-color: #09383B;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
}
</style>
