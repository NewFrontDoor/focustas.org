// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-raleway';
import Typography from 'typography';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import App from './components/App';
import reducer from './reducers';
import type { Store } from './types';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerColor: 'rgb(0, 153, 51)',
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  headerWeight: 200,
  bodyColor: 'rgb(85, 85, 85)',
  bodyWeight: 200,
  bodyFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => ({
    h1: {
      color: '#3C3'
    },
    h3: {
      color: '#3C3',
      fontWeight: 500,
      marginBottom: 0
    },
    ul: {
      ...adjustFontSizeTo('14px'),
      listStyleType: 'disc'
    },
    li: {
      marginBottom: 0
    },
    a: {
      transition: 'color 0.2s linear',
      color: '#428bca',
      textDecoration: 'none'
    },
    'a:visited': {
      color: '#339933'
    },
    'a:active, a:hover, a:focus': {
      color: '#339933',
      textDecoration: 'underline'
    }
  })
});

typography.injectStyles();

const store: Store = createStore(reducer);

const renderer = createRenderer();
const mountNode = document.getElementById('stylesheet');

ReactDOM.render(
  <Provider store={store}>
    <FelaProvider renderer={renderer} mountNode={mountNode}>
      <App />
    </FelaProvider>
  </Provider>,
  document.getElementById('root')
);
