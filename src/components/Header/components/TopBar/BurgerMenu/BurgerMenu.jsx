import React from "react";

import "./BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <>
      <input
        id="menu-toggle"
        type="checkbox"
      />
      <label
        className="menu-button-container"
        htmlFor="menu-toggle"
      >
        <div className="menu-button"></div>
      </label>
    </>
  );
};

export default BurgerMenu;
