import React from "react";

import "./BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <section class="top-nav">
      <input
        id="menu-toggle"
        type="checkbox"
      />
      <label
        class="menu-button-container"
        for="menu-toggle"
      >
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        {/* <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li> */}
      </ul>
    </section>
  );
};

export default BurgerMenu;
