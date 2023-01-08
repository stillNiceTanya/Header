import React, { useRef, useEffect, useState } from "react";
import { navigationItems } from "../constants";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  const menuWrapperRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  function handleResize(event) {
    const isHorizontalScrollEnded =
      menuWrapperRef.current.offsetWidth + menuWrapperRef.current.scrollLeft >=
      menuWrapperRef.current.scrollWidth;

    const isMenuWrapperScrollable =
      menuWrapperRef.current.scrollWidth > menuWrapperRef.current.clientWidth;
    setShowRightArrow(isMenuWrapperScrollable && !isHorizontalScrollEnded);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleRightArrowClick() {
    menuWrapperRef.current.scrollBy({ behavior: "smooth", left: 120 });
  }

  function handleLeftArrowClick() {
    menuWrapperRef.current.scrollBy({ behavior: "smooth", left: -120 });
  }

  function handleScroll(event) {
    const scrollLeft = menuWrapperRef.current.scrollLeft;
    setShowLeftArrow(scrollLeft > 0);

    const isHorizontalScrollEnded =
      menuWrapperRef.current.offsetWidth + menuWrapperRef.current.scrollLeft >=
      menuWrapperRef.current.scrollWidth;

    setShowRightArrow(!isHorizontalScrollEnded);
  }

  return (
    <div className="navbar-wrapper">
      {showLeftArrow && (
        <Button
          onClick={handleLeftArrowClick}
          className="with-right-fader"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="img-button img-button-left"
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
        ref={menuWrapperRef}
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
        <Button
          onClick={handleRightArrowClick}
          className="with-left-fader"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="img-button img-button-right"
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
