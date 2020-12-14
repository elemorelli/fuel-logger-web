import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import VehicleDetailsPage from "../components/VehicleDetailsPage";
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact={true} path="/" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/vehicles/:id" component={VehicleDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
