import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "isomorphic-unfetch";
import configureStore from "./store/configureStore";
import { validateLogin } from "./lib/auth";
import AppRouter, { history } from "./routers/AppRouter";
import LoadingPage from "./components/LoadingPage";
import { populateUserProfile } from "./actions/userProfile";

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
