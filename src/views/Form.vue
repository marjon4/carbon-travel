<template>
  <form>
    <h1>Ange start- och slutdestination samt antal passagerare för att se rekommenderat färdsätt</h1>
    <label for="start">Startdestination: </label>
    <select id="start" v-model="start">
      <option disabled value="">Välj ett alternativ</option>
      <option>Stockholm</option>
      <option>Göteborg</option>
      <option>Malmö</option>
    </select>
    <label for="end">Slutdestination: </label>
    <select id="end" v-model="end">
      <option disabled value="">Välj ett alternativ</option>
      <option>Oslo</option>
      <option>Berlin</option>
      <option>London</option>
    </select>
    <label for="passengers">Passagerare: </label>
    <input type="number" id="passengers" v-model="passengers" />
    <button type="submit">Påbörja beräkning</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      start: '',
      end: '',
      passengers: 0
    }
  }
}
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
select, input {
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