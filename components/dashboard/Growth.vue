<template>
<div class="">
  <apexchart type="area" height="420" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "Growth",
  data() {
    return {
      series: [{
        name: "Alış",
        data: [432, 549, 332, 543, 654, 867, 372, 695, 132]
      },
        {
          name: "Satış",
          data: [127, 84, 374, 422, 853, 983, 433, 352, 235]
        }],
      chartOptions: {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show:false
          },
        },

        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width:2
        },
        grid: {
          row: {
            colors: ["transparent", "#f7f7f7"],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    }
  }
})
</script>

<style scoped>

</style>
