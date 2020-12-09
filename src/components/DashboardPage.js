import React from "react";
import { Link } from "react-router-dom";

import VehicleList from "./VehicleList";

const DashboardPage = () => (
  <div className="content-container">
    <VehicleList></VehicleList>
  </div>
);

export default DashboardPage;
