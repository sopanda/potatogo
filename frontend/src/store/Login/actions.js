import axios from 'axios-url';
import { toast } from 'helpers';
import {
  SUCCESSFULL_LOGIN,
  SERVER_NOT_RESPONDING
} from 'constants/notifications';
import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLED
} from './actionTypes';
import { history, deleteCookie } from 'helpers';

export const login = user => {
  const loginAwait = () => ({ type: LOGIN_PENDING, isLoading: true });

  const loginError = error => {
    toast('error', error);
    return {
      type: LOGIN_REJECTED,
      payload: error
    };
  };

  const loginSuccess = token => {
    toast('success', SUCCESSFULL_LOGIN);
    return {
      type: LOGIN_FULFILLED
    };
  };

  return dispatch => {
    dispatch(loginAwait());
    axios
      .post('/v1/auth/login/', user)
      .then(res => {
        dispatch(loginSuccess());
        history.push('/');
      })
      .catch(error => {
        if (!error.response) {
          loginError(SERVER_NOT_RESPONDING);
        } else {
          let errorMsg = error.response.data.errors[0].msg;
          dispatch(loginError(errorMsg));
        }
      });
  };
};

export function logout() {
  deleteCookie('access_token');
  return {
    type: LOGOUT_FULFILLED
  };
}
