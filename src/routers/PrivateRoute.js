import React from "react";
import { Route, Redirect } from "react-router-dom";
import { validToken } from "../lib/auth";
import Header from "../components/Header";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      validToken() ? (
        <>
          <Header />
          <Component {...props} />
        </>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export { PrivateRoute as default };
