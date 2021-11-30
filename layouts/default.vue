<template>
  <v-app>
    <div v-if="userLogged">
      <div>
        <div class="tw-flex">
          <div class="tw-w-2/12" style="position: relative">
            <CustomMenu />
          </div>
          <div class="tw-w-10/12 tw-pl-4 tw-pr-4">
            <CustomHeader @show_menu="handleMenuVisibility" />
            <div class="tw-container tw-mx-auto tw-p-2">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
      <DrawerMenu
        @menu_closed="handleMenuVisibility"
        :visible="drawer_visible"
      />
    </div>
    <div v-else>
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import CustomHeader from "../components/shared/CustomHeader";
import DrawerMenu from "../components/shared/DrawerMenu";
import CustomMenu from "../components/shared/CustomMenu";

export default {
  components: { DrawerMenu, CustomHeader, CustomMenu },
  data() {
    return {
      drawer_visible: false,
      userLogged: true,
    };
  },
  methods: {
    handleMenuVisibility() {
      this.drawer_visible = !this.drawer_visible;
    },
  },
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
