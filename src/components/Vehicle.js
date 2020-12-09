import React, { useState, useEffect } from "react";

import { get } from "../lib/fetch";

import loaderImage from "url:../images/loader.gif";
import notFoundImage from "url:../images/image-not-found.png";

const Vehicle = ({ vehicle }) => {
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
    <div>
      {pictureURL ? (
        <img height="250" width="250" alt={`"${vehicle.model}"'s picture`} src={pictureURL} />
      ) : (
        <img height="250" width="250" alt={`loading "${vehicle.model}"'s picture`} src={loaderImage} />
      )}
      <p>{vehicle.model}</p>
    </div>
  );
};

export default Vehicle;
