<template>
<div>
  <q-card class="auth-card">

    <q-tabs v-model="tab" active-color="primary" indicator-color="primary" align="justify">
      <q-tab name="login" label="Login" />
      <q-tab name="register" label="Register" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="login">
        <login-register :tab="tab" />
      </q-tab-panel>

      <q-tab-panel name="register">
        <login-register :tab="tab" />
      </q-tab-panel>

    </q-tab-panels>
  </q-card>
</div>
</template>

<script>
import LoginRegisterVue from 'src/components/Auth/LoginRegister.vue';

export default {
  data() {
    return {
      tab: 'login',
    };
  },
  components: {
    'login-register': LoginRegisterVue,
  },
};
</script>

<style>
.auth-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
