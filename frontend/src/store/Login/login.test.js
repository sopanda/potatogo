import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from './actionTypes';
import { login } from './reducer';

describe('Login Reducer', () => {
  it('Should return unsign in state if token don`t exists', () => {
    const token = false;
    let initialState = token || {
      isLoggedIn: false,
      isLoading: false,
      isError: false
    };
    expect(login(undefined, {})).toEqual(initialState);
  });

  it('Should return sign in state if token presented', () => {
    const token = true;

    let initialState = token && {
      isLoggedIn: true,
      isLoading: false,
      isError: false
    };
    expect(login(initialState, {})).toEqual(initialState);
  });

  it('Should return set loading while waiting for response', () => {
    const action = { type: LOGIN_PENDING };
    const expectedState = {
      isLoggedIn: false,
      isError: false,
      isLoading: true
    };

    expect(login(undefined, action)).toEqual(expectedState);
  });

  it('Should return sign in state after successful response from server', () => {
    const action = { type: LOGIN_FULFILLED };
    const expectedState = {
      isLoggedIn: true,
      isError: false,
      isLoading: false
    };

    expect(login(undefined, action)).toEqual(expectedState);
  });

  it('Should return error after unsuccessful response from server', () => {
    const action = { type: LOGIN_REJECTED, payload: 'something went wrong' };
    const expectedState = {
      isLoggedIn: false,
      isError: true,
      isLoading: false,
      ErrorMsg: 'something went wrong'
    };

    expect(login(undefined, action)).toEqual(expectedState);
  });
});
