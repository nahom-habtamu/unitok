import React from 'react'
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import Profile from './Profile';

const NavBar = () => {
  return (
    <header className='header'>
      <div className="header__content">
        <Logo/>
        <SearchBar/>
        <NavLinks/>
        <Profile/>
      </div>
    </header>
  )
}

export default NavBar



