import { CHANGE_TYPE } from './actionTypes';

export const changeType = type => {
  return {
    type: CHANGE_TYPE,
    payload: type
  };
};
