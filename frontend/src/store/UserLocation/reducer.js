import { GET_LOCATION_FULFILLED, GET_LOCATION_REJECTED } from './actionTypes';

const initialState = { longitude: null, latitude: null, error: null };

export function location(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION_FULFILLED:
      return {
        ...state,
        ...action.payload
      };
    case GET_LOCATION_REJECTED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
