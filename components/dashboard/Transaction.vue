<template>
<div class="">
  <div v-for="(item,index) in transaction_data" :key="index" class="tw-flex tw-items-center tw-p-2 tw-rounded-lg tw-transition tw-duration-200 hover:tw-bg-gray-100">
    <div class="tw-flex tw-items-center tw-w-1/4">
     <span class="light-blue lighten-4 tw-rounded-full tw-p-2 ">
       <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="26" height="26" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 784.37 1277.39" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_1421394342400">
   <g>
    <polygon fill="#29B6F6" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
    <polygon fill="#29B6F6" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
    <polygon fill="#29B6F6" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
    <polygon fill="#29B6F6" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
    <polygon fill="#29B6F6" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
    <polygon fill="#29B6F6" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "/>
   </g>
  </g>
 </g>
</svg>
     </span>
      <span class="tw-pl-3" style="font-size: 13px;">
        {{item.label}}
      </span>
    </div>
    <div class=" tw-w-1/4 tw-text-center   ">
      <span :class="item.type === 0 ? 'green lighten-4 green--text text--darken-3' : 'red lighten-4 red--text text--darken-3'" class="tw-px-4 tw-py-2 tw-rounded-lg tw-inline-block" style="font-size: 12px;">
        {{item.type === 0 ? 'Alış' : 'Satış'}}
      </span>
    </div>
    <div class="grey--text tw-w-1/4 tw-text-center text--darken-1" style="font-size: 12px;">
{{getCurrentDate}}
    </div>
    <div class="tw-font-semibold grey--text  tw-w-1/4 tw-text-center text--darken-3">
      $ {{item.amount.toLocaleString()}}
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';

import moment from 'moment';

export default Vue.extend({
  name: "Transaction",
  data() {
    return {
      transaction_data : [
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
