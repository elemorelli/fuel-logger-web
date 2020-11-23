import React from "react";
import ReactDOM from "react-dom";
import "isomorphic-unfetch";
import { validateLogin } from "./lib/auth";
import AppRouter, { history } from "./routers/AppRouter";
import LoadingPage from "./components/LoadingPage";

const mountNode = document.getElementById("app");

const jsx = <AppRouter />;

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, mountNode);
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, mountNode);

validateLogin()
  .then(() => {
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  })
  .catch(() => {
    renderApp();
    history.push("/");
  });
