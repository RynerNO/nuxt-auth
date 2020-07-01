<template lang='pug'> 
  v-app
    v-main
      v-container.fill-height(fluid)
        v-row(align="center" justify="center")
          v-col(cols="12" sm="8" md="4")
            login
</template>

<script>
import Login from '~/components/auth/Login.vue'

export default {
  components: {
    Login,
  },
}
</script>
