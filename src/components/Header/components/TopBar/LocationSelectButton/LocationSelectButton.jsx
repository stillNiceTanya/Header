import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import LocationPopUp from "../../LocationPopUp/LocationPopUp";

import "./LocationSelectButton.css";

const LocationSelectButton = ({ onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [areasData, setData] = useState(null);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    if (!showPopup || areasData) {
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
      console.log(areas);
    };

    fetchData().catch(console.error);
  }, [showPopup, areasData]);

  return (
    <div
      onClick={handleTogglePopup}
      className="location-select-button"
    >
      <FontAwesomeIcon
        icon={faCompass}
        className="location-icon"
      />
      <span>Буэнос-Айрес</span>

      {showPopup && <LocationPopUp />}
    </div>
  );
};

export default LocationSelectButton;
