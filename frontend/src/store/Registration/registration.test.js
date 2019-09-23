import {
  REGISTRATION_PENDING,
  REGISTRATION_FULFILLED,
  REGISTRATION_REJECTED
} from './actionTypes';
import { registration } from './reducer';

describe('Registration Reducer', () => {
  it('Should return set loading while waiting for response', () => {
    const action = { type: REGISTRATION_PENDING };
    const expectedState = {
      registering: true,
      registered: false
    };

    expect(registration(undefined, action)).toEqual(expectedState);
  });

  it('Should return registration state after successful response from server', () => {
    const action = { type: REGISTRATION_FULFILLED };
    const expectedState = {
      registered: true,
      registering: false
    };

    expect(registration(undefined, action)).toEqual(expectedState);
  });

  it('Should return error after unsuccessful response from server', () => {
    const action = {
      type: REGISTRATION_REJECTED,
      payload: 'something went wrong'
    };
    const expectedState = {
      registered: false,
      registering: false,
      error: 'something went wrong'
    };

    expect(registration(undefined, action)).toEqual(expectedState);
  });
});
