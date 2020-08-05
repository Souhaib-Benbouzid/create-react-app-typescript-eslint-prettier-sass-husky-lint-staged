import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
