<template lang='pug'> 
  v-app
    v-main
      v-container.full-height(fluid)
        v-row(align="center" justify="center")
          v-col(cols="12" sm="8" md="4")
            Login
</template>

<script>
import Login from '~/components/auth/Login.vue'

export default {
  components: {
    Login
  },
   middleware: 'auth',
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

