import React, { useRef, useEffect } from "react";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(event.target);
        console.log(ref.current.contains(event.target));
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function OutsideClick({ children, onOutsiteClick }) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, onOutsiteClick);

  return <div ref={wrapperRef}>{children}</div>;
}
