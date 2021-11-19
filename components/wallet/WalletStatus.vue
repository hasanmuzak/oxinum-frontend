<template>
  <div>
    <div v-for="item,index in 6"
         :key="index" :class="index === 0 ? 'blue darken-2 active' : ''" class="tw-flex status-container tw-items-center tw-p-4 tw-mb-1 tw-rounded-lg tw-cursor-pointer tw-transition tw-duration-200">
      <img alt="" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=014" width="36">
      <div class="tw-pl-2">
        <div class="tw-p-0 tw-m-0 tw-font-semibold" style="font-size: 14px;">Bitcoin</div>
        <div class="tw-p-0 tw-m-0" style="color: rgba(0,0,0, .4);font-size: 13px;">0.000213 BTC</div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "WalletStatus",
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.status-container {
  &:hover {
    background-color: #F5F5F5;
  }
}
.active {
  div {
    color: white !important;
  }
}
</style>
