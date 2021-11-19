<template>
  <div class="tw-p-4">
    <div class="tw-container tw-mx-auto">
      <div class="tw-flex tw-items-center tw-justify-between">
        <div class="tw-flex tw-items-center">
          <div v-if="show_menu_btn"
               class="bar-section tw-mr-2 tw-cursor-pointer tw-p-4 tw-rounded-full hover:tw-bg-gray-100 tw-transition tw-duration-200"
               @click="$emit('show_menu')">
            <div class="bar tw-mb-1"></div>
            <div class="bar tw-mb-1"></div>
            <div class="bar"></div>
          </div>
          <v-text-field
            v-model="keyword"
            :style="{fontSize:'14px'}"
            dense
            filled
            hide-details
            placeholder="Kripto ara..."
            rounded
          ></v-text-field>
        </div>
        <div class="tw-flex tw-items-center">
          <div class="tw-flex tw-items-center">
            <v-menu :close-on-content-click="false" max-width="282px" min-width="282px" nudge-left="117" offset-y
                    transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <div id="notification-section"
                     class="tw-flex tw-items-center tw-justify-center hover:tw-bg-gray-200 tw-transition tw-duration-200 tw-rounded-full"
                     style="height:48px;width: 48px;"
                     v-bind="attrs" v-on="on">
                  <v-badge color="error" dot offset-x="10" offset-y="5">
                    <div class="tw-flex tw-items-center">
                      <svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="m2.41547595 3.5h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848zm2.58452405-1.5c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5"
                          fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          transform="matrix(-1 0 0 -1 18 19)"/>
                      </svg>
                    </div>
                  </v-badge>
                </div>
              </template>
              <v-list dense nav>
                <div class="tw-pb-2">
                  <v-tabs>
                    <v-tab>Okunmadı</v-tab>
                    <v-tab>Okundu</v-tab>
                  </v-tabs>
                </div>
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :class="hover ? 'grey lighten-5' : ''"
                               class="tw-transition tw-cursor-pointer tw-duration-200" link
                               to="/">
                    <v-list-item-content :style="{fontSize:'13px'}">
                      <div>
                        <div class="tw-flex tw-items-center tw-justify-between">
                          <span class="tw-font-semibold">Satış İncelemesi</span>
                          <span class="tw-font-semibold">BTC</span>
                        </div>
                        <div class="tw-mt-2 tw-flex tw-items-center">
                          <span style="font-size: 12px;color: rgba(0,0,0,.4)">
                            15 Ağustos, 2021 - 22:32
                          </span>
                          <div class="tw-pl-2">
                            <v-chip
                              color="success"
                              label
                              x-small
                            >
                              Rapor
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :class="hover ? 'grey lighten-5' : ''"
                               class="tw-transition tw-cursor-pointer tw-duration-200" link
                               to="/">
                    <v-list-item-content :style="{fontSize:'13px'}">
                      <div>
                        <div class="tw-flex tw-items-center tw-justify-between">
                          <span class="tw-font-semibold">Satış İncelemesi</span>
                          <span class="tw-font-semibold">ETH</span>
                        </div>
                        <div class="tw-mt-2 tw-flex tw-items-center">
                          <span style="font-size: 12px;color: rgba(0,0,0,.4)">
                            15 Ağustos, 2021 - 22:32
                          </span>
                          <div class="tw-pl-2">
                            <v-chip
                              color="error"
                              label
                              x-small
                            >
                              Rapor
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :class="hover ? 'grey lighten-5' : ''"
                               class="tw-transition tw-cursor-pointer tw-duration-200" link
                               to="/">
                    <v-list-item-content :style="{fontSize:'13px'}">
                      <div>
                        <div class="tw-flex tw-items-center tw-justify-between">
                          <span class="tw-font-semibold blue--text">Haftalık Rapor</span>
                        </div>
                        <div class="tw-mt-2 tw-flex tw-items-center">
                          <span style="font-size: 12px;color: rgba(0,0,0,.4)">
                            15 Ağustos, 2021 - 22:32
                          </span>
                          <div class="tw-pl-2">
                            <v-chip
                              color="primary"
                              label
                              x-small
                            >
                              Rapor
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :class="hover ? 'grey lighten-5' : ''"
                               class="tw-transition tw-cursor-pointer tw-duration-200" link
                               to="/">
                    <v-list-item-content :style="{fontSize:'13px'}">
                      <div>
                        <div class="tw-flex tw-items-center tw-justify-between">
                          <span class="tw-font-semibold">Bot Detayı</span>
                        </div>
                        <div class="tw-mt-2 tw-flex tw-items-center">
                          <span style="font-size: 12px;color: rgba(0,0,0,.4)">
                            15 Ağustos, 2021 - 22:32
                          </span>
                          <div class="tw-pl-2">
                            <v-chip
                              color="secondary"
                              label
                              x-small
                            >
                              Bot
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :class="hover ? 'grey lighten-5' : ''"
                               class="tw-transition tw-cursor-pointer tw-duration-200" link
                               to="/">
                    <v-list-item-content :style="{fontSize:'13px'}">
                      <div>
                        <div class="tw-flex tw-items-center tw-justify-between">
                          <span class="tw-font-semibold blue--text">Aylık Rapor</span>
                        </div>
                        <div class="tw-mt-2 tw-flex tw-items-center">
                          <span style="font-size: 12px;color: rgba(0,0,0,.4)">
                            15 Ağustos, 2021 - 22:32
                          </span>
                          <div class="tw-pl-2">
                            <v-chip
                              color="primary"
                              label
                              x-small
                            >
                              Rapor
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-hover>

                <div class="tw-flex tw-items-center tw-justify-between tw-pt-1" style="font-size: 12px;">
                  <span class="tw-py-1 tw-px-2 tw-cursor-pointer tw-font-semibold pagination-item disabled-pagination-item">Önceki</span>
                  <span class="tw-py-1 tw-px-2 tw-font-semibold tw-cursor-pointer pagination-item">Sonraki</span>
                </div>
              </v-list>
            </v-menu>
          </div>
          <v-menu offset-y open-on-hover transition="slide-x-transition">
            <template v-slot:activator="{ on, attrs }">
              <div class="tw-ml-6 tw-flex tw-items-center" style="height: 48px;" v-bind="attrs" v-on="on">
                <v-avatar
                  color="primary"
                  size="36"
                >
                  <img
                    alt="John"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  >
                </v-avatar>
                <span class="tw-pl-2">Hasan Muzak</span>
                <span>
              <svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg"><path
                d="m8.5.5-4 4-4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                transform="translate(6 8)"/></svg>
            </span>
              </div>
            </template>
            <v-list dense nav>
              <v-list-item link>
                <span class="tw-inline-block" style="min-width:30px;">
                  <svg fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
                      fill="currentColor"/>
                    <path
                      d="M15.21 22.19C15 22.19 14.79 22.16 14.58 22.11C13.96 21.94 13.44 21.55 13.11 21L12.99 20.8C12.4 19.78 11.59 19.78 11 20.8L10.89 20.99C10.56 21.55 10.04 21.95 9.42 22.11C8.79 22.28 8.14 22.19 7.59 21.86L5.87 20.87C5.26 20.52 4.82 19.95 4.63 19.26C4.45 18.57 4.54 17.86 4.89 17.25C5.18 16.74 5.26 16.28 5.09 15.99C4.92 15.7 4.49 15.53 3.9 15.53C2.44 15.53 1.25 14.34 1.25 12.88V11.12C1.25 9.66004 2.44 8.47004 3.9 8.47004C4.49 8.47004 4.92 8.30004 5.09 8.01004C5.26 7.72004 5.19 7.26004 4.89 6.75004C4.54 6.14004 4.45 5.42004 4.63 4.74004C4.81 4.05004 5.25 3.48004 5.87 3.13004L7.6 2.14004C8.73 1.47004 10.22 1.86004 10.9 3.01004L11.02 3.21004C11.61 4.23004 12.42 4.23004 13.01 3.21004L13.12 3.02004C13.8 1.86004 15.29 1.47004 16.43 2.15004L18.15 3.14004C18.76 3.49004 19.2 4.06004 19.39 4.75004C19.57 5.44004 19.48 6.15004 19.13 6.76004C18.84 7.27004 18.76 7.73004 18.93 8.02004C19.1 8.31004 19.53 8.48004 20.12 8.48004C21.58 8.48004 22.77 9.67004 22.77 11.13V12.89C22.77 14.35 21.58 15.54 20.12 15.54C19.53 15.54 19.1 15.71 18.93 16C18.76 16.29 18.83 16.75 19.13 17.26C19.48 17.87 19.58 18.59 19.39 19.27C19.21 19.96 18.77 20.53 18.15 20.88L16.42 21.87C16.04 22.08 15.63 22.19 15.21 22.19ZM12 18.49C12.89 18.49 13.72 19.05 14.29 20.04L14.4 20.23C14.52 20.44 14.72 20.59 14.96 20.65C15.2 20.71 15.44 20.68 15.64 20.56L17.37 19.56C17.63 19.41 17.83 19.16 17.91 18.86C17.99 18.56 17.95 18.25 17.8 17.99C17.23 17.01 17.16 16 17.6 15.23C18.04 14.46 18.95 14.02 20.09 14.02C20.73 14.02 21.24 13.51 21.24 12.87V11.11C21.24 10.48 20.73 9.96004 20.09 9.96004C18.95 9.96004 18.04 9.52004 17.6 8.75004C17.16 7.98004 17.23 6.97004 17.8 5.99004C17.95 5.73004 17.99 5.42004 17.91 5.12004C17.83 4.82004 17.64 4.58004 17.38 4.42004L15.65 3.43004C15.22 3.17004 14.65 3.32004 14.39 3.76004L14.28 3.95004C13.71 4.94004 12.88 5.50004 11.99 5.50004C11.1 5.50004 10.27 4.94004 9.7 3.95004L9.59 3.75004C9.34 3.33004 8.78 3.18004 8.35 3.43004L6.62 4.43004C6.36 4.58004 6.16 4.83004 6.08 5.13004C6 5.43004 6.04 5.74004 6.19 6.00004C6.76 6.98004 6.83 7.99004 6.39 8.76004C5.95 9.53004 5.04 9.97004 3.9 9.97004C3.26 9.97004 2.75 10.48 2.75 11.12V12.88C2.75 13.51 3.26 14.03 3.9 14.03C5.04 14.03 5.95 14.47 6.39 15.24C6.83 16.01 6.76 17.02 6.19 18C6.04 18.26 6 18.57 6.08 18.87C6.16 19.17 6.35 19.41 6.61 19.57L8.34 20.56C8.55 20.69 8.8 20.72 9.03 20.66C9.27 20.6 9.47 20.44 9.6 20.23L9.71 20.04C10.28 19.06 11.11 18.49 12 18.49Z"
                      fill="currentColor"/>
                  </svg>
                </span>
                <v-list-item-title :style="{fontSize:'13px'}">Ayarlar</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <span class="tw-inline-block" style="min-width:30px;">
                  <svg fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4399 15.37C17.2499 15.37 17.0599 15.3 16.9099 15.15C16.6199 14.86 16.6199 14.38 16.9099 14.09L18.9399 12.06L16.9099 10.03C16.6199 9.74 16.6199 9.26 16.9099 8.97C17.1999 8.68 17.6799 8.68 17.9699 8.97L20.5299 11.53C20.8199 11.82 20.8199 12.3 20.5299 12.59L17.9699 15.15C17.8199 15.3 17.6299 15.37 17.4399 15.37Z"
                fill="currentColor"/>
              <path
                d="M19.9298 12.81H9.75977C9.34977 12.81 9.00977 12.47 9.00977 12.06C9.00977 11.65 9.34977 11.31 9.75977 11.31H19.9298C20.3398 11.31 20.6798 11.65 20.6798 12.06C20.6798 12.47 20.3398 12.81 19.9298 12.81Z"
                fill="currentColor"/>
              <path
                d="M11.7598 20.75C6.60977 20.75 3.00977 17.15 3.00977 12C3.00977 6.85 6.60977 3.25 11.7598 3.25C12.1698 3.25 12.5098 3.59 12.5098 4C12.5098 4.41 12.1698 4.75 11.7598 4.75C7.48977 4.75 4.50977 7.73 4.50977 12C4.50977 16.27 7.48977 19.25 11.7598 19.25C12.1698 19.25 12.5098 19.59 12.5098 20C12.5098 20.41 12.1698 20.75 11.7598 20.75Z"
                fill="currentColor"/>
            </svg>
                </span>
                <v-list-item-title :style="{fontSize:'13px'}">Çıkış Yap</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "CustomHeader",
  data() {
    return {
      keyword: '',
      windowWidth: window.innerWidth,
      show_menu_btn: false
    }
  },
  watch: {
    windowWidth: {
      handler(newVal) {
        this.show_menu_btn = newVal <= 1280;
      },
      immediate: true
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }

})
</script>

<style lang="scss" scoped>
.bar-section {
  .bar {
    width: 18px;
    height: 2px;
    background-color: #2D2D24;
    border-radius: 4px;
  }
}

::v-deep .v-list-item--active::before {
  background-color: inherit;
}

::v-deep .v-tab {
  font-size: 12px;
  font-weight: 600;
}

.disabled-pagination-item {
  cursor: not-allowed;
  pointer-events: none;
  color: rgba(0,0,0,.3);
}

.pagination-item {
  transition: .2s;
  &:hover{
    color: #3C1DD7;
  }
}
</style>
