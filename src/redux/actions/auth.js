import * as types from '../types';

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  user,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
