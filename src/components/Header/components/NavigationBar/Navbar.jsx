import React from "react";
import academyLists from "./constants.js";

import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      {academyLists.map((el) => (
        <li
          key={el.id}
          className="navbar-list"
        >
          {el.categoryTitle}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
