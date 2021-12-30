<template>
  <p>
    Transportation is the second largest source of carbon dioxide emissions looking at the consumption based emissions per year for an average Swede.
    Therefore, overlooking the way we travel can really affect our total environmental impact.
    As seen in the above diagram, the average transportation related CO2-emissions per year and person was 1.7 tons 2018. Far from the goal of 1 ton per person and year in average global emissions (also seen in diagram) by the year of 2050,
    in order to achieve the <i>Generation Goal</i>, the environmental quality goal <i>Limited Climate Impact</i> and the <i>Paris Agreement goal</i>.
  </p>
  <p>
    Going by car to the selected destination results in {{ result.car.data.attributes.carbon_mt / form.passengers }} tons of CO2-emissions per passenger and is equal to
    {{ Math.round(((result.car.data.attributes.carbon_mt / form.passengers) / yearlyCO2) * 100) }} % of the average amount of transportation related CO2-emissions per year and citizen in Sweden ({{ yearlyCO2 }} tons),
    and {{ Math.round(((result.car.data.attributes.carbon_mt / form.passengers) / 1) * 100) }} % of the average amount of global emissions per year and person to achieve the above environmental goals (1 ton).
  </p>
  <p>
    Going by airplane to the selected destination results in {{ result.flight.data.attributes.carbon_mt / form.passengers }} tons of CO2-emissions per passenger and is equal to
    {{ Math.round(((result.flight.data.attributes.carbon_mt / form.passengers) / yearlyCO2) * 100) }} % of the average amount of transportation related CO2-emissions per year and citizen in Sweden ({{ yearlyCO2 }} tons),
    and {{ Math.round(((result.flight.data.attributes.carbon_mt / form.passengers) / 1) * 100) }} % of the average amount of global emissions per year and person to achieve the above environmental goals (1 ton).
  </p>
</template>
<script>
export default {
  name: "Recommendation",
  props: ["result"],
  data() {
    return {
      yearlyCO2: 1.7,
      form: {}
    }
  },
  mounted() {
    if(this.$store.state.form)
      this.form = this.$store.state.form;
  }
}
</script>