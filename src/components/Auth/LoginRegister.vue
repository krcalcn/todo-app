<template>
<form @submit.prevent="submitForm">
  <div class="row q-mb-md">
    <q-banner class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      {{ tab | titleCase }} to access your Todos anywhere!
    </q-banner>
  </div>
  <div class="row q-mb-md">
    <q-input
      outlined
      v-model="formData.email"
      stack-label
      label="Email"
      ref="email"
      class="col"
      :rules="[val => isValidEmailAddress(val) || 'Please enter a valid Email address']"
      lazy-rules />
  </div>
  <div class="row q-mb-md">
    <q-input
      outlined
      v-model="formData.password"
      type="password"
      ref="password"
      stack-label
      label="Password"
      class="col"
      :rules="[ val => val.length >= 8 || 'Please enter at least 8 characters']"
      lazy-rules />
  </div>
  <div class="row">
    <q-space />
    <q-btn
      color="primary"
      type="submit"
      :label="tab" />
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'register') {
          this.registerUser(this.formData);
        } else {
          this.loginUser(this.formData);
        }
      }
    },
  },
  filters: {
    titleCase(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  },
};
</script>
