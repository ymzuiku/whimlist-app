import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
