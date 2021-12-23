<template>
  <main>
    <NoResult v-if="!result.car"/>
    <div v-else class="result-wrapper">
      <h1>
        We searched different travel options for <span class="form-data">{{ form.passengers }}</span> passengers
        going from <span class="form-data">{{ form.start }}</span> 
        to <span class="form-data">{{ form.end }}</span> 
        and found this...
      </h1>
      <Table />
    </div>
  </main>
</template>

<script>
import Table from '../components/Table.vue';
import NoResult from '../components/NoResult';

export default {
  name: 'Result',
  components: {
    Table,
    NoResult,
  },
  data (){
    return {
      form: {
        start: this.$store.state.form.start,
        end: this.$store.state.form.end,
        passengers: this.$store.state.form.passengers,
      },
      result: {},
    }
  },
  mounted() {
    console.log(this.$store.state.form);
    if(this.$store.state.result)
      this.result = this.$store.state.result;
  }
}
</script>

<style scoped>
main {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
}
.result-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  max-width: 620px;
  padding: 15% 25px;
}
.form-data {
  font-style: italic;
  text-decoration: underline;
}
</style>
