import React from 'react';
import Logo from './components/TopBar/Logo';
import LocationSelectButton from './components/TopBar/LocationSelectButton';
import SearchForm from './components/TopBar/SearchForm';
import UserCard from './components/TopBar/UserCard';
import Navbar from './components/NavigationBar/Navbar';

import './styles.css';

export default function Header() {
  return (
    <div>
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
    </div>
  );
}
