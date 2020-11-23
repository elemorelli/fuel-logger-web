import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "isomorphic-unfetch";

import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { populateUserProfile } from "./actions/userProfile";

import { validateLogin } from "./lib/auth";

import LoadingPage from "./components/LoadingPage";

import "./styles/styles.scss"

const mountNode = document.getElementById("app");
ReactDOM.render(<LoadingPage />, mountNode);

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, mountNode);
    hasRendered = true;
  }
};

validateLogin()
  .then((userData) => {
    store.dispatch(populateUserProfile(userData));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  })
  .catch(() => {
    renderApp();
    history.push("/");
  });
