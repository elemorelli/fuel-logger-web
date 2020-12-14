import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { get } from "../lib/fetch";
import api from "../api"

import { populateVehicles } from "../actions/vehicles";

import styles from "./VehicleDetailsPage.module.scss";

const VehicleDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const vehicles = useSelector((state) => state.vehicles);
  const [vehicle, setVehicle] = useState({});
  const [stats, setStats] = useState({});

  useEffect(async () => {
    if (!vehicles) {
      const response = await get(api.vehicles());
      dispatch(populateVehicles(response));
      setVehicle(response.find((vehicle) => vehicle._id === id));
    } else {
      setVehicle(vehicles.find((vehicle) => vehicle._id === id));
    }
    const response = await get(api.vehicleStats);
    setStats(response)
  }, []);

  return (
    <div className="content-container">
      <img height="250" width="250" alt="vehicle image" src={api.vehiclePicture(vehicle._id)} />
      <div>
        <p>Model: {vehicle.model}</p>
        <p>Fuel Capacity: {vehicle.fuelCapacity}</p>
        <p>averageDistanceBetweenFillUps: {stats.averageDistanceBetweenFillUps}</p>
        <p>maxDistanceBetweenFillUps: {stats.maxDistanceBetweenFillUps}</p>
        <p>nextFillUp: {stats.nextFillUp}</p>
        <p>maxDistanceToFillUp: {stats.maxDistanceToFillUp}</p>
        <p>averageFuelConsumption: {stats.averageFuelConsumption}</p>
        <p>maxFuelConsumption: {stats.maxFuelConsumption}</p>
        <p>minFuelConsumption: {stats.minFuelConsumption}</p>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;


/*


stats: {
    : "877.52",
    : "90081.50",
    : "114261.92",
    : "203465.90",
    : "62.63",
    : "6411.49",
    : "0.69",
  };

*/