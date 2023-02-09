import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import LocationPopUp from "../../LocationPopUp/LocationPopUp";
import preloader from "./img/loading-loader.svg";
import OutsideClick from "../../hooks/useOutsideClick";
import fetchAreas from "../../../../../api/api";

import "./LocationSelectButton.css";

const selectedLocationLocalStorageKey = "MySelectValue";
const defaultCity = "Пермь";

const LocationSelectButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [areasData, setData] = useState([]);

  const [selectedCities, setSelectedCities] = useState(() => {
    const selectedCitiesLocalStorage = localStorage.getItem(
      selectedLocationLocalStorageKey
    );
    try {
      return JSON.parse(selectedCitiesLocalStorage) || [];
    } catch {
      return [];
    }
  });

  const [currentCity, setCurrentCity] = useState(() => {
    return selectedCities.map((item) => item.label).join(", ") || defaultCity;
  });

  const handleSave = () => {
    localStorage.setItem(
      selectedLocationLocalStorageKey,
      JSON.stringify(selectedCities)
    );
    const newCity = selectedCities.map((item) => item.label).join(", ");
    setCurrentCity(newCity || defaultCity);
    setShowPopup(false);
  };

  const handleChange = (selected) => {
    setSelectedCities(selected);
  };

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupOutsideClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (!showPopup || areasData.length > 0) {
      return;
    }

    fetchAreas()
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
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
        <span className="location-text">{currentCity}</span>
      </button>

      {showPopup && (
        <div className="location-select-content">
          {areasData.length > 0 ? (
            <LocationPopUp
              options={areasData}
              selectedCities={selectedCities}
              onChange={handleChange}
              onSave={handleSave}
            />
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
