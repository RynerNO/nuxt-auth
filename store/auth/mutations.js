import { SET_AUTH } from './actions';

export default {
  [SET_AUTH](state, user) {
    state.userID = user.id;
    state.token = user.token;
    state.status = true;
  },
};
