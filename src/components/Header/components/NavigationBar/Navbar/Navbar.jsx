import React, { useRef, useEffect, useState } from "react";
import { navigationItems } from "../constants";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  const list = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  function handleResize(event) {
    console.log(list.current.clientWidth, list.current.scrollWidth);
    const hasArrows = list.current.scrollWidth > list.current.clientWidth;
    setShowArrow(hasArrows); // если hasArrows тру, то рендерить баттон
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-wrapper">
      {/* {showArrow && <Button />} */}

      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="img-button"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg> */}

      <div className="menu-wrapper">
        <ul
          className="navbar"
          ref={list}
        >
          {navigationItems.map((el) => (
            <li
              key={el.id}
              className="navbar-item"
            >
              {el.categoryTitle}
            </li>
          ))}
        </ul>
      </div>

      {showArrow && (
        <Button>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="img-button"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      )}
    </div>
  );
}

export default Navbar;
