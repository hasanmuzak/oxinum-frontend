<template>
  <div class="">
    <div v-for="(item,index) in transaction_data" :key="index"
         class="tw-flex tw-items-center tw-justify-between tw-p-2 tw-rounded-lg tw-transition tw-duration-200 hover:tw-bg-gray-100">
      <div class="">
        <span class="tw-pr-4">
          {{index + 1}}.
        </span>
      <span
        :class="item.type === 0 ? 'green lighten-4 green--text text--darken-3' : 'red lighten-4 red--text text--darken-3'"
        class="tw-text-center tw-py-2 tw-rounded-lg tw-inline-block" style="font-size: 12px;width: 70px;">
        {{ item.type === 0 ? 'Alış' : 'Satış' }}
      </span>
      </div>
      <div class="grey--text text--darken-1" style="font-size: 12px;">
        {{ getCurrentDate }}
      </div>
      <div class="tw-font-semibold grey--text  text--darken-3">
        $ {{ item.amount.toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  name: "RecentActivity",
  data() {
    return {
      transaction_data: [
        {
          label: 'Bitcoin',
          type: 0,
          amount: 324.32
        },
        {
          label: 'Ethereum',
          type: 1,
          amount: 123.23
        },
        {
          label: 'Bitcoin',
          type: 0,
          amount: 324.32
        },
        {
          label: 'Ethereum',
          type: 1,
          amount: 123.23
        },
        {
          label: 'Ethereum',
          type: 1,
          amount: 123.23
        },
        {
          label: 'Bitcoin',
          type: 0,
          amount: 324.32
        },
        {
          label: 'Ethereum',
          type: 1,
          amount: 123.23
        },
        {
          label: 'Ethereum',
          type: 1,
          amount: 123.23
        }
      ]
    }
  },
  computed: {
    getCurrentDate() {
      return moment().format('DD/MM/yyyy HH:mm')
    }
  }
})
</script>

<style scoped>

</style>
