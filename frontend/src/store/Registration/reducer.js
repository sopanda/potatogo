import {
  REGISTRATION_PENDING,
  REGISTRATION_FULFILLED,
  REGISTRATION_REJECTED
} from './actionTypes';

const initialState = { registering: false, registered: false, error: null };

export function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_PENDING:
      return {
        registering: true,
        registered: false
      };
    case REGISTRATION_FULFILLED:
      return {
        registered: true,
        registering: false
      };
    case REGISTRATION_REJECTED:
      return {
        registered: false,
        registering: false,
        error: action.payload
      };
    default:
      return state;
  }
}
