import axios from 'axios-url';
import { toast } from 'helpers';
import {
  SUCCESSFULL_REGISTRATION,
  SERVER_NOT_RESPONDING
} from 'constants/notifications';
import {
  REGISTRATION_PENDING,
  REGISTRATION_FULFILLED,
  REGISTRATION_REJECTED
} from './actionTypes';
import { history } from 'helpers';

export const register = user => {
  const registerAwait = () => ({ type: REGISTRATION_PENDING });

  const registerError = error => {
    toast('error', error);
    return {
      type: REGISTRATION_REJECTED,
      payload: error
    };
  };

  const registerSuccess = () => {
    toast('success', SUCCESSFULL_REGISTRATION);
    return {
      type: REGISTRATION_FULFILLED
    };
  };

  return dispatch => {
    dispatch(registerAwait());
    axios
      .post('/v1/auth/register', user)
      .then(res => {
        dispatch(registerSuccess());
        history.push('/');
      })
      .catch(error => {
        if (!error.response) {
          registerError(SERVER_NOT_RESPONDING);
        } else {
          const [{ msg: errorMsg }] = error.response.data.errors;
          dispatch(registerError(errorMsg));
        }
      });
  };
};
