import React from "react";
import Favorites from "../Favorites/Favorites";
import UserInfo from "../UserInfo/UserInfo";

import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="user-card-wrapper">
      <Favorites />
      <UserInfo />
    </div>
  );
};

export default UserCard;
