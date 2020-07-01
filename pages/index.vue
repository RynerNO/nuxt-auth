<template lang='pug'> 
  v-app
    v-main
      v-container.fill-height(fluid)
        v-row(align="center" justify="center")
          v-col(cols="12" sm="8" md="4")
            v-card.elevation-10.d-flex.flex-column
              div.d-flex
                v-avatar(size="64").ma-5
                  img(:src="user.avatar" :alt="user.name")
                v-card-text
                  p.text--primary Name: {{ user.name }}
                  p.text--primary Email: {{ user.email }}
              v-btn.ma-2.align-self-end(color="primary" @click="logout") Logout
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    user: ''
  }),
  mounted() {
    this.$store.dispatch('auth/GET_USER', this.$store.state.auth).then((response) => {
      this.user = response.data
    })
  },
  methods: {
    logout() {
      this.$store.commit('auth/UNSET_AUTH')
      this.$cookies.remove('userID')
      this.$cookies.remove('userToken')
      this.$router.push('/auth')
    }
  }
}
</script>


