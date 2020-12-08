import React, { useState } from 'react';
import LoginService from '../services/LoginService';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import '../styles/Login.css';
import 'react-notifications/lib/notifications.css';

import Logo from '../assets/logo.svg';

function Login( { history } ) {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
  
    function inputLogin(event) {
        setLogin(event.target.value);
    }

    function inputPassword(event) {
        setPassword(event.target.value);
    }

    async function submit(event) {
        event.preventDefault();
        if(login !== '') {
            
            const user = await LoginService.create(login, password);
            
            if(user.data === 'Login or password incorrect.') {
                NotificationManager.error('Login or password incorrect.');
            } else {
                sessionStorage.setItem('user', JSON.stringify(user.data));
                history.push('/timeline');
            }
        }
    }

    function register(event) {
        event.preventDefault();
        history.push('/register');
    }

    return(
      <>
        <div className="content">
        
            <div className="thumb">
                <img src = { Logo } alt="Twitter Logo" />
            </div>
            
            <form onSubmit = { submit } >
                
                <input
                    value = { login }
                    onChange = { inputLogin }
                    type = "text" 
                    placeholder = "your login here!"
                />
                
                <input
                    value = { password }
                    onChange = { inputPassword }
                    type = "password" 
                    placeholder = "your password here!"
                />
                
                <button type="submit" > go twitter </button>

                <p className="registerButton">
                    <p>not registered? <a onClick = { register }>Click here and register</a></p>
                </p>
                
            </form>
        
        </div>
        <NotificationContainer />
      </>
  );
}

export default Login;