<template>
  <table>
    <tr>
      <th>Mode of travel</th>
      <th>Carbon dioxide emissions</th>
    </tr>
    <tr>
      <td>Car</td>
      <td>1 ton</td>
    </tr>
    <tr>
      <td>Airplane</td>
      <td>2 tons</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'Table'
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