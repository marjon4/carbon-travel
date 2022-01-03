<template>
  <label :for="id">{{ label }}</label>
  <div class="autocomplete-box">
    <input
      :id="id"
      type="text"
      v-model="input"
      @input="debouncedHandler"
      placeholder="Start typing to search cities"
    />
    <ul v-if="airports.length">
      <li v-for="(airport, i) in airports" :key="airport.IATA + '_' + i">
        <button type="button" @click="selectAirport(airport)">{{ airport.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '../http-common.js';
import debounce from 'lodash.debounce';

export default {
  name: "Autocomplete",
  props: ["label", "id"],
  emits: ["clicked"],
  data() {
    return {
      input: '',
      airport: {},
      airports: []
    }
  },
  methods: {
    fetchAirports: async function(event) {
      let input = event.target.value;
      if(input.length >= 3 ){
        const res = await http.post("/iata", {'startTwo': this.input})
         .then(({ data }) => {
            return data
          })
          .catch(error => console.log(error));
        if(res){
          console.log('res: ', res);
          this.airports = res;
        }
      }
    },
    selectAirport: function (airport) {
      this.airport = airport;
      this.airports = [];
      this.input = airport.name;
      this.$emit('clicked', this.airport);
    }
  },
  created() {
    this.debouncedHandler = debounce(event => this.fetchAirports(event), 3000)
  },
  beforeUnmount() {
    this.debouncedHandler.cancel();
  }
}
</script>

<style scoped>
.autocomplete-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
ul {
  list-style-type: none;
  position: absolute;
  z-index: 1;
  width: -webkit-fill-available;
  padding: 0;
  margin: 0;
  top: 29px;
  background: #fff;
  border: 1px solid #09383B;
  border-radius: 5px;
}
li {
  padding: 0 5px;
}
li:first-child {
  padding-top: 5px;
}
li:last-child {
  padding-bottom: 5px;
}
button {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
}
</style>