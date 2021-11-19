<template>
  <div>
    <div class="tw-border">
      <div class="tw-p-4 tw-flex tw-items-center tw-justify-between">
    <span class="header-title">
      Market
    </span>
        <div style="width: 240px;">
          <v-text-field
            v-model.lazy="keyword"
            :style="{fontSize:'14px'}"
            dense
            filled
            hide-details
            placeholder="Arama yap"
            rounded
          ></v-text-field>
        </div>
      </div>
      <div v-if="marketData" class="tw-p-4">
        <v-checkbox
          v-model="show_only_i_have"
          :style="{marginTop: '0', fontSize: '13px'}"
          color="primary"
          hide-details
          label="Sadece takip ettiklerimi göster."
        ></v-checkbox>
      </div>

      <div v-if="loading">
        <v-skeleton-loader
          type="list-item-avatar-three-line, list-item-three-line, article"
        ></v-skeleton-loader>
        <div class="tw-grid tw-grid-cols-2 tw-gap-5">
          <div>
            <v-skeleton-loader
              type="list-item-three-line"
            ></v-skeleton-loader>
          </div>
          <div>
            <v-skeleton-loader
              type="list-item-three-line"
            ></v-skeleton-loader>
          </div>
        </div>
      </div>
      <v-data-table
        v-if="filteredData"
        :footer-props="{itemsPerPageAllText : 'Tümü', itemsPerPageOptions: [10,20,50,-1]}"
        :headers="headers"
        :items="filteredData"
        :items-per-page="20"
        class=""
      >

        <template v-slot:item.symbol="{ item }">
          <div class="tw-flex tw-items-center">
            <span class=" tw-font-semibold">
           {{ item.symbol.replace('USDT', '')}}
          </span>
            <span class="tw-px-2 grey--text text--darken-1">
            /
          </span>
            <span class="grey--text text--darken-1" style="font-size:14px;">
           {{ item.symbol.replace(/(.*)(?=USDT)/, '')}}
          </span>
          </div>
        </template>

        <template v-slot:item.priceChange="{ item }">
        <span :class="(parseFloat(item.priceChange)) > 0 ? 'green--text text--darken-1' : 'red--text text--darken-1'">
          $ {{
            (parseFloat(item.priceChange))}}
        </span>
        </template>

        <template v-slot:item.priceChangePercent="{ item }">
        <span
          :class="(parseFloat(item.priceChangePercent)) > 0 ? 'green--text text--darken-1' : 'red--text text--darken-1'">
          % {{
            (parseFloat(item.priceChangePercent)).toFixed(2)
          }}
        </span>
        </template>

        <template v-slot:item.askPrice="{ item }">
        <span class="tw-font-semibold" :class="item.priceChangePercent > 10.0 ? 'light-blue--text text--darken-2' : (item.priceChangePercent < -10.0 ? 'red--text text--darken-2' : '')">
          $ {{
            (parseFloat(item.askPrice))
          }}
        </span>
        </template>


        <template v-slot:item.quoteVolume="{ item }">
        <span>
          {{ new Intl.NumberFormat('en', {notation: 'compact', maximumFractionDigits:2, minimumFractionDigits:2}).format(item.quoteVolume) }}
        </span>
        </template>
      </v-data-table>
    </div>
    <div v-if="show_error_message" class="tw-pt-4">
      <v-alert :style="{fontSize: '13px'}" border="left" type="error">
        Çok fazla istek gönderildiği için Binance tarafından geçici olarak engellendin.
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      headers: [
        {
          text: 'İsim',
          align: 'start',
          sortable: false,
          value: 'symbol',
        },

        {text: 'Fiyat', value: 'askPrice'},
        {text: 'Değişim (24 Saat)', value: "priceChange"},
        {text: 'Değişim (Oran)', value: "priceChangePercent"},
        {text: 'Hacim', value: 'quoteVolume'},
      ],
      marketData: null,
      keyword: '',
      loading: false,
      show_error_message: false,
      show_only_i_have: false,
      filteredData: null
    }
  },
  methods: {
    fetchCurrencies() {
      this.loading = true;
      this.$axios.get('https://api.binance.com/api/v3/ticker/24hr').then(response => {
        this.marketData = response.data.filter(x => {
          const regex = new RegExp(/.*\usdt$/, 'gi')
          return regex.test(x.symbol);
        })
        this.filteredData = this.marketData;
        this.loading = false;
        console.log(this.marketData);
      }).catch(err => {
        if (err.response) {
          if (err.response.status === 429) {
            this.show_error_message = true;
          }
        }
        this.loading = false;
      })
    }
  },
  watch: {
    keyword(newValue) {
      this.filteredData = this.marketData;
      this.filteredData = this.filteredData.filter(x => {

        const regex = new RegExp(newValue, 'gi')
        return regex.test(x.symbol)
      })
      if(newValue === ''){
        this.filteredData = this.marketData
      }
    }
  },
  mounted() {
    this.fetchCurrencies();
  }
}
</script>

<style lang="scss" scoped>
::v-deep .text-d-hidden {
  display: none;
}

::v-deep .v-label {
  font-size: 14px;
}
</style>
