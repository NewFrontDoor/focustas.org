// @flow

import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import Typography from "typography";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createRenderer } from "fela";
import { Provider as FelaProvider } from "react-fela";
import App from "./components/App";
import reducer from "./reducers";
import type { Store } from "./types";

const typography = new Typography({
  includeNormalize: false,
  baseFontSize: "20px",
  scaleRatio: 3,
  headerColor: "rgb(0, 153, 51)",
  headerFontFamily: [
    "Raleway",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  headerWeight: 200,
  bodyColor: "rgb(85, 85, 85)",
  bodyWeight: 200,
  bodyFontFamily: [
    "Raleway",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["200", "400", "500", "700"]
    }
  ]
});

typography.injectStyles();

const store: Store = createStore(reducer);

const renderer = createRenderer();
const mountNode = document.getElementById("stylesheet");

ReactDOM.render(
  <Provider store={store}>
    <FelaProvider renderer={renderer} mountNode={mountNode}>
      <App />
    </FelaProvider>
  </Provider>,
  document.getElementById("root")
);
