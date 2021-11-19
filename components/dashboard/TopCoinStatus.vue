<template>
  <div class="tw-mt-4">
    <div class="tw-grid lg:tw-grid-cols-4 tw-grid-cols-2 tw-gap-3">
      <div class=" tw-p-4 tw-rounded-lg grey lighten-5">
        <div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <img src="https://cdn.worldvectorlogo.com/logos/ethereum-1.svg" alt="First" width="22" height="22">
              <div class="tw-flex tw-flex-col tw-pl-2">
                <span class="tw-font-semibold text--darken-4 grey--text">Ethereum</span>
                <span class="grey--text lighten-4" style="font-size:12px;">ETH</span>
              </div>
            </div>
            <div class="tw-flex tw-items-center text--darken-1 green--text">
            <span class="tw-pr-1">
              <svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 6)"><path d="m8.5 7.5v-7h-7"/><path d="m8.5.5-8 8"/></g></svg>
            </span>
              <span style="font-size:13px;">
                5.32 %
              </span>
            </div>
          </div>
        </div>
        <div class="tw-pt-3">
          <apexchart type="area" height="100" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
      <div class=" tw-p-4 tw-rounded-lg grey lighten-5">
        <div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <img src="https://cdn.worldvectorlogo.com/logos/ethereum-1.svg" alt="First" width="22" height="22">
              <div class="tw-flex tw-flex-col tw-pl-2">
                <span class="tw-font-semibold text--darken-4 grey--text">Ethereum</span>
                <span class="grey--text lighten-4" style="font-size:12px;">ETH</span>
              </div>
            </div>
            <div class="tw-flex tw-items-center text--darken-1 green--text">
            <span class="tw-pr-1">
              <svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 6)"><path d="m8.5 7.5v-7h-7"/><path d="m8.5.5-8 8"/></g></svg>
            </span>
              <span style="font-size:13px;">
                5.32 %
              </span>
            </div>
          </div>
        </div>
        <div class="tw-pt-3">
          <apexchart type="area" height="100" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
      <div class=" tw-p-4 tw-rounded-lg grey lighten-5">
        <div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <img src="https://cdn.worldvectorlogo.com/logos/ethereum-1.svg" alt="First" width="22" height="22">
              <div class="tw-flex tw-flex-col tw-pl-2">
                <span class="tw-font-semibold text--darken-4 grey--text">Ethereum</span>
                <span class="grey--text lighten-4" style="font-size:12px;">ETH</span>
              </div>
            </div>
            <div class="tw-flex tw-items-center text--darken-1 green--text">
            <span class="tw-pr-1">
              <svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 6)"><path d="m8.5 7.5v-7h-7"/><path d="m8.5.5-8 8"/></g></svg>
            </span>
              <span style="font-size:13px;">
                5.32 %
              </span>
            </div>
          </div>
        </div>
        <div class="tw-pt-3">
          <apexchart type="area" height="100" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
      <div class=" tw-p-4 tw-rounded-lg grey lighten-5">
        <div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center">
              <img src="https://cdn.worldvectorlogo.com/logos/ethereum-1.svg" alt="First" width="22" height="22">
              <div class="tw-flex tw-flex-col tw-pl-2">
                <span class="tw-font-semibold text--darken-4 grey--text">Ethereum</span>
                <span class="grey--text lighten-4" style="font-size:12px;">ETH</span>
              </div>
            </div>
            <div class="tw-flex tw-items-center text--darken-1 green--text">
            <span class="tw-pr-1">
              <svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 6)"><path d="m8.5 7.5v-7h-7"/><path d="m8.5.5-8 8"/></g></svg>
            </span>
              <span style="font-size:13px;">
                5.32 %
              </span>
            </div>
          </div>
        </div>
        <div class="tw-pt-3">
          <apexchart type="area" width="100%" height="100" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "TopCoinStatus",
  data() {
    return {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chartOptions: {
        chart: {
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          },
          redrawOnParentResize: true
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
