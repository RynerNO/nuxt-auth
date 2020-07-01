import { SET_AUTH, UNSET_AUTH } from './actions';

export default {
  [SET_AUTH](state, user) {
    state.userID = user.id;
    state.token = user.token;
    state.status = true;
  },
  [UNSET_AUTH](state) {
    state.userID = null;
    state.token = null;
    state.status = false;
  },
};
