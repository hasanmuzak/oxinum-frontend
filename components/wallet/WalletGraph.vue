<template>
  <div class="">
    <div class="tw-flex tw-items-center tw-justify-between tw-p-5">
      <h1 class="header-title">Bitcoin Cüzdan Durumu</h1>
      <div>
        <v-select
          :items="items"
          label="Gösterim"
          hide-details
          style="width: 200px;"
          item-text="label"
          item-value="val"
          outlined
          v-model="selected_option"
          dense
        ></v-select>
      </div>
    </div>
    <apexchart type="bar" height="400" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "WalletGraph",
  data() {
    return {
      items: [{ label : 'Günlük', val : 0}, { label : 'Haftalık', val : 1}, { label : 'Aylık', val : 2}, { label : 'Yıllık', val : 3}],
      selected_option: 0,
      series: [{
        name: "BTC",
        data: [432, 549, 332, 543, 654, 867, 372, 695, 132]
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

<style scoped lang="scss">
::v-deep .v-list-item__title {
  font-size: 13px !important;
}
</style>
