import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import notFoundImage from "url:../images/image-not-found.svg";
import styles from "./VehicleSnippet.module.scss";

const VehicleSnippet = ({ vehicle }) => {
  const [imageSource, setImageSource] = useState(`http://localhost:3000/vehicles/${vehicle._id}/picture`);

  const onImageNotFound = () => {
    setImageSource(notFoundImage);
  }

  return (
    <Link className={styles.vehicleSnippet} to={`/vehicles/${vehicle._id}`}>
      <div className={styles.polaroid}>
        <picture>
          <source srcSet={imageSource} type="image/webp" />
          <img
            height="250"
            width="250"
            onError={onImageNotFound}
            alt={`"${vehicle.model}"'s picture`}
            src={`${imageSource}?format=jpeg`}
          />
        </picture>

        <div className={styles.vehicleName}>{vehicle.model}</div>
      </div>
    </Link>
  );
};

export default VehicleSnippet;
