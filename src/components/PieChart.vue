<template>
  <div class="chart-wrapper">
    <canvas id="pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: "PieChart",
  props: ['result'],
  mounted() {
    const ctx = document.getElementById('pie-chart');
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Car", "Airplane"],
      datasets: [{
        label: "Carbon dioxide emissions (tons)",
        backgroundColor: ["#09383B", "#e1e1e1"],
        borderColor: "#fafafa",
        borderWidth: 3,
        hoverBorderColor: ["#072c2f", "#c8c8c8"],
        hoverBackgroundColor: ["#072c2f", "#c8c8c8"],
        data: [this.result.car.data.attributes.carbon_mt, this.result.flight.data.attributes.carbon_mt]
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false
          },
        }
      }
    });
  }
}
</script>

<style scoped>
.chart-wrapper {
  padding: 50px;
}
</style>