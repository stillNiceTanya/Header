import React from "react";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Favorites.css";

const Favorites = () => {
  return (
    <div className="favorites-wrapper">
      <div className="favorites-icon">
        <FontAwesomeIcon icon={faHeart} />
      </div>

      <span>1</span>
    </div>
  );
};

export default Favorites;
