<template>
  <form @submit="onSubmit()">
    <h1>
      Ange start- och slutdestination samt antal passagerare för att se
      rekommenderat färdsätt
    </h1>
    <label for="start">Startdestination: </label>
    <select id="start" v-model="form.start">
      <option disabled value="">Välj ett alternativ</option>
      <option v-for="startOption in startOptions" :key="startOption">
        {{ startOption }}
      </option>
    </select>
    <label for="end">Slutdestination: </label>
    <select id="end" v-model="form.end">
      <option disabled value="">Välj ett alternativ</option>
      <option v-for="endOption in endOptions" :key="endOption">
        {{ endOption }}
      </option>
    </select>
    <label for="passengers">Passagerare: </label>
    <input type="number" id="passengers" v-model="form.passengers" />
    <button type="submit">Påbörja beräkning</button>
  </form>
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
form {
  padding: 25px 50px;
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
  border: 1px solid #2c3e50;
  color: #333333;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}
button {
  margin-top: 10px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 18px;
  font-family: Avenir;
  font-weight: 600;
  cursor: pointer;
}
</style>
