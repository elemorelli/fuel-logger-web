import React from "react";

import VehicleList from "./VehicleList";

import styles from "./DashboardPage.module.scss";

const DashboardPage = () => (
  <div className={`content-container ${styles.dashboard}`}>
    <VehicleList></VehicleList>
  </div>
);

export default DashboardPage;
