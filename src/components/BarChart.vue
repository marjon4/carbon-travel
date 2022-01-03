<template>
  <canvas id="bar-chart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "BarChart",
  props: ["result"],
  methods: {
    renderChart() {
      const barCanvas = document.getElementById("bar-chart");
      // eslint-disable-next-line no-unused-vars
      new Chart(barCanvas, {
        type: "bar",
        data: {
          labels: [
            "Average transportation/year",
            "Recommended/year",
            "Car",
            "Airplane",
          ],
          datasets: [
            {
              backgroundColor: ["#09383B", "#3a5f62", "#afafaf", "#e1e1e1"],
              data: [
                1.7,
                1,
                this.result.data.calculatedCarCarbon.data.attributes.carbon_mt,
                this.result.data.calculatedFlightCarbon.data.attributes
                  .carbon_mt,
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              labels: {
                fontColor: "#666666",
              },
            },
            title: {
              display: true,
              text: "Carbon dioxide emissions (tons) / person",
              color: "#666666",
            },
          },
        },
      });
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>

<style scoped>
canvas {
  margin-top: 25px;
  margin-bottom: 10px;
}
</style>
