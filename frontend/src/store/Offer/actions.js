import axios from 'axios-url';
import { toast } from 'helpers';
import {
  SUCCESSFULL_OFFER_CRETION,
  SERVER_NOT_RESPONDING
} from 'constants/notifications';
import {
  OFFER_CREATION_PENDING,
  OFFER_CREATION_FULFILLED,
  OFFER_CREATION_REJECTED,
  GET_OFFERS_REJECTED,
  GET_OFFERS_PENDING,
  GET_OFFERS_FULFILLED
} from './actionTypes';
import { history } from 'helpers';

export const offerCreation = offer => {
  const offerCreationAwait = () => ({ type: OFFER_CREATION_PENDING });

  const offerCreationError = error => {
    toast('error', error);
    return {
      type: OFFER_CREATION_REJECTED,
      payload: error
    };
  };

  const offerCreationSuccess = () => {
    toast('success', SUCCESSFULL_OFFER_CRETION);
    return {
      type: OFFER_CREATION_FULFILLED
    };
  };

  return dispatch => {
    dispatch(offerCreationAwait());
    axios
      .post('/v1/offers/offers', offer)
      .then(res => {
        dispatch(offerCreationSuccess());
        history.push('/');
      })
      .catch(error => {
        if (!error.response) {
          offerCreationError(SERVER_NOT_RESPONDING);
        } else {
          const [{ msg: errorMsg }] = error.response.data.errors;
          dispatch(offerCreationError(errorMsg));
        }
      });
  };
};

export const getAllOffers = () => {
  const getAllOffersAwait = () => ({ type: GET_OFFERS_PENDING });

  const getAllOffersError = error => {
    toast('error', error);
    return {
      type: GET_OFFERS_REJECTED,
      payload: error
    };
  };

  const getAllOffersSuccess = offers => {
    return {
      type: GET_OFFERS_FULFILLED,
      payload: offers
    };
  };

  return dispatch => {
    dispatch(getAllOffersAwait());
    axios
      .get('/v1/offers/offers')
      .then(res => {
        const { data } = res.data.success[0];
        dispatch(getAllOffersSuccess(data));
      })
      .catch(error => {
        if (!error.response) {
          getAllOffersError(SERVER_NOT_RESPONDING);
        } else {
          const [{ msg: errorMsg }] = error.response.data.errors;
          dispatch(getAllOffersError(errorMsg));
        }
      });
  };
};
