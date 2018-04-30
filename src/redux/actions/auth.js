import { sharedApiClient as apiClient } from '../../services';
import * as types from '../types';

/**
 * Register
 *
 * @example
 * auth.login({
 *   email: 'lijy91@foxmail.com',
 *   password: '123456'
 * });
 * @param {*} body -
 */
export const register = (body) => {
  const res = apiClient.sendRequest('/account/register', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return {
    type: types.REGISTER_SUCCESS,
    user: res.data,
  };
};

/**
 * Login
 *
 * @example
 * auth.login({
 *   email: 'lijy91@foxmail.com',
 *   password: '123456'
 * });
 * @param {*} body -
 */
export const login = async (body) => {
  try {
    const res = await apiClient.sendRequest('/account/login', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    return {
      type: types.LOGIN_SUCCESS,
      user: res.data,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Logout
 *
 * @example
 * auth.logout();
 */
export const logout = () => {
  apiClient.sendRequest('/account/logout', {
    method: 'POST',
  });
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
