import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import LocationPopUp from "../../LocationPopUp/LocationPopUp";
import preloader from "./img/loading-loader.svg";
import OutsideAlerter from "../../hooks/useOutsideClick";
// import Button from "../../NavigationBar/Button/Button";

import "./LocationSelectButton.css";

const LocationSelectButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [areasData, setData] = useState([]);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupOutsideClick = () => {
    if (!showPopup) {
      return;
    }
    setShowPopup(!showPopup);
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
      setData(json);

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
    <OutsideAlerter onOutsiteClick={handlePopupOutsideClick}>
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

      <div className="popup-preloader-wrapper">
        {showPopup && <LocationPopUp options={areasData} />}
        {showPopup && !(areasData.length > 0) && (
          <img
            className="preloader-img"
            src={preloader}
            alt=""
          />
        )}
      </div>
    </OutsideAlerter>
  );
};

export default LocationSelectButton;
