<template lang="pug">
  v-form(v-model="loginForm.valid")
    v-toolbar(color="primary" dark flat)
      v-toolbar-title Login form
    v-card-text
      v-text-field(v-model="loginForm.fields.email" prepend-icon="mdi-account" :rules="loginForm.emailRules" label="Your Email" )
      v-text-field(v-model="loginForm.fields.password" prepend-icon="mdi-lock-question" :rules="loginForm.passwordRules" label="Your Password")
      v-btn(:disabled="!loginForm.valid" color="primary" @click="login") Login
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        valid: false,
        fields: {
          email: '',
          password: '',
        },
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 64 || 'Password must be less than 64 characters',
        ],
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/POST_LOGIN', this.loginForm.fields).then((response) => {
        
      })
    }
  }
}
</script>

