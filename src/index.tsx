import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";

import App from "./components/app/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
