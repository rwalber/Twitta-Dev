import React from 'react';
// import { browserHistory } from 'history'
import { useHistory } from "react-router-dom";

import '../styles/Navbar.css';

import Logo from '../assets/logo.svg';
import Delete from '../assets/Exit.png';

function Navbar() {

  let history = useHistory();

  function logout() {
    sessionStorage.removeItem('user');
    history.push('/')
  }

  return (
      <>
        <div className="navbar">
            
          <img src = { Logo } alt=""/>

          <p>[ insert posts here ]</p>
          
          <img onClick = { logout } src = { Delete } alt=""/>

        </div>
      </>
  );
}

export default Navbar;