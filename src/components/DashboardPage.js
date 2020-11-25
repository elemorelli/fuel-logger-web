import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <div className="content-container">
    <div>What a dashboard!</div>
    <Link to="/about">About</Link>
  </div>
);

export default DashboardPage;
