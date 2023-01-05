import React, { useRef, useEffect, useState } from "react";
import { navigationItems } from "../constants";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  const list = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  function handleResize(event) {
    const isHorizontalScrollEnded =
      list.current.offsetWidth + list.current.scrollLeft >=
      list.current.scrollWidth;

    const isContentScrollobly =
      list.current.scrollWidth > list.current.clientWidth;
    setShowRightArrow(isContentScrollobly && !isHorizontalScrollEnded);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleRightArrowClick() {
    list.current.scrollBy({ behavior: "smooth", left: 120 });
  }

  function handleLefttArrowClick() {
    list.current.scrollBy({ behavior: "smooth", left: -120 });
  }

  function handleScroll(event) {
    const scrollLeft = list.current.scrollLeft;
    setShowLeftArrow(scrollLeft >= 1);

    const unMountRightArrow =
      list.current.offsetWidth + list.current.scrollLeft >=
      list.current.scrollWidth;

    setShowRightArrow(!unMountRightArrow);
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
      <div
        onScroll={handleScroll}
        className="menu-wrapper hide-scroll"
        ref={list}
      >
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
