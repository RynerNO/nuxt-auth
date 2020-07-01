export default function ({ app, store, redirect }) {
  const user = {
    id: app.$cookies.get('userID'),
    token: app.$cookies.get('userToken')
  }
  if(!!user.id && !!user.token) {
    store.commit('auth/SET_AUTH', user)
  } else {
    redirect('/auth')
  }
}