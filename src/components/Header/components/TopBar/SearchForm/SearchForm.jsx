import React from "react";
import "./SearchForm.css";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = ({ placeholder }) => {
  return (
    <div className="input-wrapper">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="search-icon"
      />

      <input
        className="search-input"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default SearchForm;
