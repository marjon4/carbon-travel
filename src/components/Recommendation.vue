<template>
  <p>
    To add some more relevancy to these numbers, we may compare them with some
    general stats. As seen in the above diagram, the average transportation
    related CO2-emissions per year and person was 1.7 tons 2019 (Naturvårdsverket 2019). Far from the
    goal of 1 ton per person and year in average global emissions (also seen in
    diagram) by the year of 2050, in order to achieve the
    <i>Generation Goal</i>, the environmental quality goal
    <i>Limited Climate Impact</i> and the <i>Paris Agreement goal</i> (Sveriges Miljömål 2018).
  </p>
  <p>
    Going by car to the selected destination results in
    {{
      result.data.calculatedCarCarbon.data.attributes.carbon_mt /
      form.passengers
    }}
    tons of CO2-emissions per passenger and is equal to
    {{
      Math.round(
        (result.data.calculatedCarCarbon.data.attributes.carbon_mt /
          form.passengers /
          yearlyCO2) *
          100
      )
    }}
    % of the average amount of transportation related CO2-emissions per year and
    citizen in Sweden ({{ yearlyCO2 }} tons), and
    {{
      Math.round(
        (result.data.calculatedCarCarbon.data.attributes.carbon_mt /
          form.passengers /
          1) *
          100
      )
    }}
    % of the average amount of global emissions per year and person to achieve
    the above environmental goals (1 ton).
  </p>
  <p>
    Going by airplane to the selected destination results in
    {{
      result.data.calculatedFlightCarbon.data.attributes.carbon_mt /
      form.passengers
    }}
    tons of CO2-emissions per passenger and is equal to
    {{
      Math.round(
        (result.data.calculatedFlightCarbon.data.attributes.carbon_mt /
          form.passengers /
          yearlyCO2) *
          100
      )
    }}
    % of the average amount of transportation related CO2-emissions per year and
    citizen in Sweden ({{ yearlyCO2 }} tons), and
    {{
      Math.round(
        (result.data.calculatedFlightCarbon.data.attributes.carbon_mt /
          form.passengers /
          1) *
          100
      )
    }}
    % of the average amount of global emissions per year and person to achieve
    the above environmental goals (1 ton).
  </p>
  <h3>Referenslista</h3>
  <ol>
    <li>Sveriges Miljömål (2018) <i>Konsumtionsbaserade utsläpp av växthusgaser per område.</i> sverigesmiljomal.se/miljomalen/generationsmalet/konsumtionsbaserade-vaxthusgasutslapp-per-omrade/ [2021-12-30]</li>
    <li>Naturvårdsverket (2019) <i>Konsumtionsbaserade växthusgasutsläpp per person och år.</i> https://www.naturvardsverket.se/data-och-statistik/konsumtion/vaxthusgaser-konsumtionsbaserade-utslapp-per-person/ [2021-12-30]</li>
  </ol>
</template>
<script>
export default {
  name: "Recommendation",
  props: ["result"],
  data() {
    return {
      yearlyCO2: 1.7,
      form: {},
    };
  },
  mounted() {
    if (this.$store.state.form) this.form = this.$store.state.form;
  },
};
</script>
