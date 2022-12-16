import React from "react";

import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LocationSelectButton.css";

const LocationSelectButton = () => {
  return (
    <div className="location-select-button">
      <FontAwesomeIcon
        icon={faCompass}
        className="location-icon"
      />
      <span>Москва</span>
    </div>
  );
};

export default LocationSelectButton;
