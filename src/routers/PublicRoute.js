import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (isAuthenticated || true ? <Redirect to="/dashboard" /> : <Component {...props} />)}
  />
);

export { PublicRoute as default };
