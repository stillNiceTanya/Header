import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function OutsideAlerter({ children, onOutsiteClick }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onOutsiteClick);

  return <div ref={wrapperRef}>{children}</div>;
}
