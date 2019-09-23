import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLED
} from './actionTypes';
import { getCookie } from 'helpers';

let token = getCookie('access_token');

const initialState = token
  ? { isLoggedIn: true, isLoading: false, isError: false }
  : { isLoggedIn: false, isLoading: false, isError: false };

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, isLoading: true, isLoggedIn: false };
    case LOGIN_FULFILLED:
      return { ...state, isLoading: false, isLoggedIn: true };
    case LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        ErrorMsg: action.payload,
        isLoggedIn: false
      };
    case LOGOUT_FULFILLED:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}
