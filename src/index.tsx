import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import history from "./history";
import { rootReducer } from "./reducers";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
