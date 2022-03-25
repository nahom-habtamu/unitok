import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import Profile from './Profile';
import HamburgerMenuIcon from './HamburgerMenuIcon';

const NavBar = () => {
  return (
    <header className='header'>
      <div className="header__content">
        <Logo/>
        <SearchBar/>
        <NavLinks/>
        <Profile/>
        <HamburgerMenuIcon/>
      </div>
    </header>
  )
}

export default NavBar;



