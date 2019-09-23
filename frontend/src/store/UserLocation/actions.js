import { GET_LOCATION_FULFILLED, GET_LOCATION_REJECTED } from './actionTypes';
import { LOCATION_ERROR } from 'constants/maps';

export const setUserLocation = coords => {
  const { longitude, latitude } = coords;
  return coords
    ? { type: GET_LOCATION_FULFILLED, payload: { longitude, latitude } }
    : { type: GET_LOCATION_REJECTED, payload: LOCATION_ERROR };
};
