import React from "react";
import { navigationItems } from "./constants";

import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      {navigationItems.map((el) => (
        <li
          key={el.id}
          className="navbar-item"
        >
          {el.categoryTitle}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
