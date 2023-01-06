import React from "react";
import Select from "react-select";

import "./constants";
import "./LocationPopUp.css";

export default function LocationPopUp() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="popUp-wrapper">
      <Select
        options={options}
        closeMenuOnSelect={false}
        isMulti
      />
    </div>
  );
}
