import Logo from "./components/TopBar/Logo/Logo";
import LocationSelectButton from "./components/TopBar/LocationSelectButton/LocationSelectButton";
import SearchForm from "./components/TopBar/SearchForm/SearchForm";
import UserCard from "./components/TopBar/UserCard/UserCard";
import Navbar from "./components/NavigationBar/Navbar/Navbar";
import BurgerMenu from "./components/TopBar/BurgerMenu/BurgerMenu";
import LocationPopUp from "./components/LocationPopUp/LocationPopUp";

import "./styles.css";

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="topbar-wrapper">
          <div className="burger-responsive">
            <BurgerMenu />
          </div>
          <Logo />
          <div className="location-wrapper">
            <LocationSelectButton />
          </div>
          <div className="search-wrapper">
            <SearchForm
              placeholder={"Учебное заведение, специальность или профессия"}
            />
          </div>
          <UserCard />
        </div>

        <div className="navigation-wrapper">
          <Navbar />
        </div>
      </div>
    </>
  );
}
