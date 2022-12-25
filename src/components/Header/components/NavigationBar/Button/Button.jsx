import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      // onClick={onClick}
      // className="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
