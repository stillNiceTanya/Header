import React from "react";

import "./UserInfo.css";
import ava from "../img/ava.jpeg";

const UserInfo = () => {
  return (
    <div className="user-info-wrapper">
      <span className="user-name">Екатерина</span>
      <img
        src={ava}
        alt="avatar"
        className="avatar"
      />
    </div>
  );
};

export default UserInfo;
