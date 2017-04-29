// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import type { Store } from './types';

const store: Store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
