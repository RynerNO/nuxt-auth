import client from '~utils/axios';

export const SET_AUTH = 'SET_AUTH';
export const UNSET_AUTH = 'UNSET_AUTH';
export const POST_LOGIN = 'POST_LOGIN';
export const GET_USER = 'GET_USER'
export default {
  [POST_LOGIN]: function (context, data) {
    return new Promise((resolve, reject) => {
      client
        .post('/login', data)
        .then(response => {
          context.commit('SET_AUTH', response.data)
          this.$cookies.set('userID', response.data.id)
          this.$cookies.set('userToken', response.data.token)
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
    
  },
  [GET_USER]: function (context, data) {
    return new Promise((resolve, reject) => {
      client
        .get(`/login/${data.userID}`)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
