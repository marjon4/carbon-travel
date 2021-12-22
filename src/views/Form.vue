<template>
  <main>
    <form @submit="onSubmit()">
      <h1>
        Enter start and end destination and number of passengers to see
        recommended mode of transport
      </h1>
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
      <button type="submit">Calculate</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        start: "",
        end: "",
        passengers: 0,
      },
      startOptions: ["Stockholm", "Göteborg", "Malmö"],
      endOptions: ["Oslo", "Berlin", "London"],
    };
  },
  methods: {
    onSubmit: function () {
      console.log(this.form);
    },
  },
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
label {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
}
select,
input {
  border: 1px solid #2f413a;
  color: #5d6b66;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}
select:focus, input:focus, button:focus {
  box-shadow: 0 0 5px #2f413a;
  outline: none;
}
button {
  margin-top: 20px;
  background-color: #2f413a;
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
