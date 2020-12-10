import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { get } from "../lib/fetch";

import loaderImage from "url:../images/loader.gif";
import notFoundImage from "url:../images/image-not-found.png";

import styles from "./VehicleSnippet.module.scss";

const VehicleSnippet = ({ vehicle }) => {
  const [pictureURL, setPictureURL] = useState("");

  useEffect(async () => {
    if (!pictureURL) {
      try {
        const response = await get(`http://localhost:3000/vehicles/${vehicle._id}/picture`);
        const pictureURL = URL.createObjectURL(response);
        setPictureURL(pictureURL);
      } catch (error) {
        setPictureURL(notFoundImage);
      }
    }
  }, []);

  return (
    <Link className={styles.vehicleSnippet} to={`/vehicles/${vehicle._id}`}>
      <div className={styles.polaroid}>
        <img
          height="250"
          width="250"
          alt={`"${vehicle.model}"'s picture`}
          src={pictureURL ? pictureURL : loaderImage}
        />
        <div className={styles.vehicleName}>{vehicle.model}</div>
      </div>
    </Link>
  );
};

export default VehicleSnippet;
