import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';
import { history } from 'helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    root
  );

  serviceWorker.unregister();
}
