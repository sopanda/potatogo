import {
  OFFER_CREATION_PENDING,
  OFFER_CREATION_FULFILLED,
  OFFER_CREATION_REJECTED,
  GET_OFFERS_REJECTED,
  GET_OFFERS_PENDING,
  GET_OFFERS_FULFILLED
} from './actionTypes';

const initialState = { loading: false, loaded: false, error: null, data: null };

export function offer(state = initialState, action) {
  switch (action.type) {
    case OFFER_CREATION_PENDING:
      return {
        loading: true,
        loaded: false
      };
    case OFFER_CREATION_FULFILLED:
      return {
        loaded: true,
        loading: false
      };
    case OFFER_CREATION_REJECTED:
      return {
        loaded: false,
        loading: false,
        error: action.payload
      };
    case GET_OFFERS_PENDING:
      return {
        loading: true,
        loaded: false
      };
    case GET_OFFERS_FULFILLED:
      return {
        loaded: true,
        loading: false,
        data: action.payload
      };
    case GET_OFFERS_REJECTED:
      return {
        loaded: false,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
