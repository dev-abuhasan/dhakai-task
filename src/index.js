import React from 'react';
import ReactDOM from 'react-dom';
import './services/scss/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';

ReactDOM.render(
  <Provider {...{ store }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
