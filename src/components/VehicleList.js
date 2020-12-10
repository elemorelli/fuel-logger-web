import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../lib/fetch";

import { populateVehicles } from "../actions/vehicles";

import VehicleSnippet from "./VehicleSnippet";

import styles from "./VehicleList.module.scss";

const VehicleList = () => {
  const vehicles = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!vehicles) {
      const response = await get("http://localhost:3000/vehicles");
      dispatch(populateVehicles(response));
    }
  }, []);

  return (
    <div className={styles.list}>
      {vehicles && vehicles.map((vehicle) => <VehicleSnippet key={vehicle._id} vehicle={vehicle} />)}
    </div>
  );
};

export default VehicleList;
