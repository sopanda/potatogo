import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware, promiseMiddleware)
  )
);
