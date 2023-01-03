import React, { useRef, useEffect, useState } from "react";
import { navigationItems } from "../constants";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  const list = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [menuLeftPosition, setMenuLeftPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // TODO: Если нажимаем на правую кнопку, все прокручивается, то появляется левая, нажимаем левую - прокрутка
  // TODO добавить чтобы прокрутка останавливалась когда меню полностью прокурутится

  function handleResize(event) {
    const hasRightArrows = list.current.scrollWidth > list.current.clientWidth;
    setShowRightArrow(hasRightArrows);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleRightArrowClick() {
    const newLeftPosition = menuLeftPosition - 150;

    const hasLeftArrows = newLeftPosition < 0;
    setShowLeftArrow(hasLeftArrows);

    setMenuLeftPosition(newLeftPosition);

    console.log(getComputedStyle(list.current));
    if (menuLeftPosition < -440) {
      console.log("aaa");
      console.log(list.current.clientWidth);
      setShowRightArrow(false);
    }
  }

  function handleLefttArrowClick() {
    console.log("left clicked");
    setMenuLeftPosition(menuLeftPosition + 150);
  }

  return (
    <div className="navbar-wrapper">
      {showLeftArrow && (
        <Button onClick={handleLefttArrowClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="img-button"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
      )}
      <div className="menu-wrapper">
        <ul
          className="navbar"
          ref={list}
          style={{
            left: `${menuLeftPosition}px`,
            transition: "all, 0.5s ",
          }}
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
      {showRightArrow && (
        <Button onClick={handleRightArrowClick}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="img-button"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      )}
    </div>
  );
}

export default Navbar;
