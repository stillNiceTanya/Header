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

      <div>1</div>
    </div>
  );
};

export default Favorites;
