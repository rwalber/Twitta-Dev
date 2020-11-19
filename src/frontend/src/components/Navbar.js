import React from 'react';

import '../styles/Navbar.css';

import Logo from '../assets/logo.svg';

function Navbar() {
  return (
      <>
        <div className="navbar">

            <img src={Logo} alt=""/>

            <p>[ insert posts here ]</p>

        </div>
      </>
  );
}

export default Navbar;