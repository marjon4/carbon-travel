<template>
  <table>
    <tr>
      <th>Mode of travel</th>
      <th>Total carbon dioxide emissions</th>
    </tr>
    <tr>
      <td>Car</td>
      <td>
        {{ result.data.calculatedCarCarbon.data.attributes.carbon_mt }} tons
      </td>
    </tr>
    <tr>
      <td>Airplane</td>
      <td>
        {{ result.data.calculatedFlightCarbon.data.attributes.carbon_mt }} tons
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["result"],
};
</script>

<style scoped>
td,
th,
table {
  border: 1px solid #09383b;
  border-collapse: collapse;
  padding: 5px;
}
table {
  font-size: 18px;
  background-color: #fff;
  margin-top: 10px;
}
</style>
