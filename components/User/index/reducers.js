import { fromJS } from "immutable";
import {
  SET_USER_IS_LOGGED,
  SET_CURRENT_USER,
} from './constants';

const initialState = fromJS({
  isLogged: false,
  user: null,
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_IS_LOGGED:
      return state.set('isLogged', action.value);
    case SET_CURRENT_USER:
      return state.set('user', action.value);
    default:
      return state;
  }
}

export default userReducer;

