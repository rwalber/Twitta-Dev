import React from 'react';

import '../styles/Login.css';
import Logo from '../assets/logo.svg';

function Login() {

    function teste() {
        console.log("OK")
    }

    return(
      <>
        <div className="content">
        
            <div className="thumb">
                <img src={Logo} alt="Twitter Logo" />
            </div>
            
            <form>
                <input type="text" placeholder="your name here!" />
                <button onClick={teste}> go twitter </button>
            </form>
        
        </div>
      </>
  );
}

export default Login;