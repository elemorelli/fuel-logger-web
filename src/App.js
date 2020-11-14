import React from "react";
import ReactDOM from "react-dom";
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

const isLogged = true;

setTimeout(() => {
  if (isLogged) {
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    renderApp();
    history.push("/");
  }
}, 500);
