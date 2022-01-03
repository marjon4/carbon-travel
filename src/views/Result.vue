<template>
  <main>
    <NoResult v-if="!result.car"/>
    <div v-else class="result-wrapper">
      <h1>
        We searched different travel options for <span class="form-data">{{ form.passengers }}</span> passengers
        going from <span class="form-data">{{ form.start.city }}</span> 
        to <span class="form-data">{{ form.end.city }}</span> 
        and found this...
      </h1>
      <Table :result="result" />
      <BarChart :result="result" />
      <Recommendation :result="result" />
    </div>
  </main>
</template>

<script>
import Table from '../components/Table.vue';
import NoResult from '../components/NoResult.vue';
import BarChart from '../components/BarChart.vue';
import Recommendation from '../components/Recommendation.vue';

export default {
  name: 'Result',
  components: {
    NoResult,
    Table,
    BarChart,
    Recommendation
  },
  data (){
    return {
      form: {},
      result: {}
    }
  },
  mounted() {
    if(this.$store.state.result)
      this.result = this.$store.state.result;
    if(this.$store.state.form)
      this.form = this.$store.state.form;
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
