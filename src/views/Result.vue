<template>
  <main>
    <div class="result-wrapper">
      <h1>
        We searched different travel options for <span class="form-data">{{$store.state.form.passengers}}</span> passengers
        going from <span class="form-data">{{$store.state.form.start}}</span> 
        to <span class="form-data">{{$store.state.form.end}}</span> 
        and found this...
      </h1>
      <Table />
    </div>
  </main>
</template>

<script>
import Table from '../components/Table.vue';

export default {
  name: 'Result',
  components: {
    Table
  },
  mounted() {
    console.log(this.$store.state.form);
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
  color: #3b0c09;
}
</style>
