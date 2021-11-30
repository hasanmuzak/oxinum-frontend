<template>
  <div class="register-parent-section">
    <div class="register-section tw-border tw-p-4">
      <h1 class="tw-text-center tw-font-semibold" style="font-size: 22px">
        Kayıt Ol
      </h1>
      <div>
        <div>
          <v-text-field
            v-model="name"
            counter="100"
            label="İsim"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            v-model="surname"
            counter="100"
            label="Soyisim"
          ></v-text-field>
        </div>
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
      <div>
        <v-text-field
          v-model="password2"
          counter="100"
          label="Şifre Tekrar"
          type="password"
        ></v-text-field>
      </div>
      <div class="tw-pt-4">
        <v-btn depressed color="primary" block>
          <span class="tw-font-semibold tw-capitalize" style="font-size: 14px">
            Kayıt Ol
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Register",
  data() {
    return {
      email: null,
      name: null,
      surname: null,
      password: null,
      password2: null,
    };
  },
});
</script>

<style scoped lang="scss">
.register-parent-section {
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
.register-section {
  width: 310px;
  background: white;
}
</style>
