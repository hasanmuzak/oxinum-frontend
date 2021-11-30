<template>
  <div class="login-parent-section">
    <div class="login-section tw-border tw-p-4">
        <h1 class="tw-text-center tw-font-semibold" style="font-size:22px;">Giriş Yap</h1>
      <div>
        <v-text-field
          v-model="email"
          counter="100"
          label="E-posta"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="password"
          counter="100"
          label="Şifre"
          type="password"
        ></v-text-field>
      </div>
      <div class="tw-pt-4">
        <v-btn depressed color="primary" block>
          <span class="tw-font-semibold tw-capitalize" style="font-size: 14px">
            Giriş Yap
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
});
</script>

<style scoped lang="scss">
.login-parent-section {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-section {
  width: 310px;
  background: white;
}
</style>
