import React from "react";
import { Route, Redirect } from "react-router-dom";
import { validToken } from "../lib/auth";

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (validToken() ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
);

export { PublicRoute as default };
