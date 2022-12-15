import React from "react";

import "./UserInfo.css";
import ava from "../img/ava.jpeg";

const UserInfo = () => {
  return (
    <div className="user-info-wrapper">
      <p className="user-name">Екатерина</p>
      <img
        src={ava}
        alt="avatar"
        className="avatar"
      />
    </div>
  );
};

export default UserInfo;
