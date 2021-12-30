<template>
  <table>
    <tr>
      <th>Mode of travel</th>
      <th>Total carbon dioxide emissions</th>
    </tr>
    <tr>
      <td>Car</td>
      <td>{{ result.car.data.attributes.carbon_mt }} tons</td>
    </tr>
    <tr>
      <td>Airplane</td>
      <td>{{ result.flight.data.attributes.carbon_mt }} tons</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'Table',
    props: ['result']
  }
</script>

<style scoped>
td, th, table {
  border: 1px solid #09383B;
  border-collapse: collapse;
  padding: 5px;
}
table {
  font-size: 18px;
  background-color: #fff;
  margin-top: 10px;
}
</style>