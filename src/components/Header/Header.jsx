import React from "react";
import Logo from "./components/TopBar/Logo/Logo";
import LocationSelectButton from "./components/TopBar/LocationSelectButton/LocationSelectButton";
import SearchForm from "./components/TopBar/SearchForm/SearchForm";
import UserCard from "./components/TopBar/UserCard/UserCard";
import Navbar from "./components/NavigationBar/Navbar";
import BurgerMenu from "./components/TopBar/BurgerMenu/BurgerMenu";

import "./styles.css";

export default function Header() {
  return (
    <>
      <div className="burger-responsive">
        <BurgerMenu />

        <Logo />

        <UserCard />
      </div>

      <div className="topbar-wrapper">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="location-wrapper">
          <LocationSelectButton />
        </div>
        <div className="search-wrapper">
          <SearchForm />
        </div>
        <UserCard />
      </div>

      <div className="navigation-wrapper">
        <Navbar />
      </div>
    </>
  );
}
