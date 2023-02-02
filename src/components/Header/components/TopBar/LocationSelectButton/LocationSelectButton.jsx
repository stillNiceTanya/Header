import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import LocationPopUp from "../../LocationPopUp/LocationPopUp";
import preloader from "./img/loading-loader.svg";
import OutsideClick from "../../hooks/useOutsideClick";

import "./LocationSelectButton.css";

const LocationSelectButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [areasData, setData] = useState([]);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupOutsideClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    if (!showPopup || areasData.length > 0) {
      return;
    }

    const fetchData = async () => {
      const data = await fetch("https://studika.ru/api/areas", requestOptions);
      const json = await data.json();

      let areas = json.reduce((all, el) => {
        all.push({ value: el.id, label: el.name });
        if (el.cities) {
          all.push(
            ...el.cities.map((item) => ({ value: item.id, label: item.name }))
          );
        }
        return all;
      }, []);
      setData(areas);
    };

    fetchData().catch(console.error);
  }, [showPopup, areasData]);

  return (
    <OutsideClick
      onOutsiteClick={handlePopupOutsideClick}
      className="location-select"
    >
      <button
        className="location-select-button"
        onClick={handleTogglePopup}
      >
        <FontAwesomeIcon
          icon={faCompass}
          className="location-icon"
        />
        <span>Пермь</span>
      </button>

      {showPopup && (
        <div className="location-select-content">
          {areasData.length > 0 ? (
            <LocationPopUp options={areasData} />
          ) : (
            <img
              className="preloader-img"
              src={preloader}
              alt=""
            />
          )}
        </div>
      )}
    </OutsideClick>
  );
};

export default LocationSelectButton;
