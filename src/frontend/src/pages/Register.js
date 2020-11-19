import React, { useState, useMemo } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import RegisterService from '../services/RegisterService';

import '../styles/Register.css';

import Camera from '../assets/camera.svg';
import DefaltThumbnail from '../assets/DefaultUser.png';

function Register( { history } ) {
    
    const [thumbnail, setThumbnail] = useState(null);

    const [name, setName] = useState();
    
    const [email, setEmail] = useState();

    const [login, setLogin] = useState();
    
    const [password, setPassword] = useState();

    const preview = useMemo( () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    function inputThumbnail(event) {
        setThumbnail(event.target.files[0]);
    }
    
    function inputName(event) {
        setName(event.target.value);
    }

    function inputEmail(event) {
        setEmail(event.target.value);
    }

    function inputLogin(event) {
        setLogin(event.target.value);
    }

    function inputPassword(event) {
        setPassword(event.target.value);
    }

    async function submit(event) {
        event.preventDefault();

        const user = new FormData();
        user.append('thumbnail', thumbnail);
        user.append('name', name);
        user.append('email', email);
        user.append('login', login);
        user.append('password', password);
        
        RegisterService.create(user).then(usr => {
            if(usr) {
                history.push('/')
                NotificationManager.success('Successfully registered!');
            } else {
                NotificationManager.error('There was a failure in user registration.');
            }
        });
    }

    return (
        <>
            <div className="register-content">
                
                <div className="thumbnail">
                    <label 
                        style={{backgroundImage: `url(${preview})`}} 
                        className = {thumbnail ? 'has-thumbnail' : ''}
                    >    
                        <img src={ Camera } alt=""/>
                
                        <input
                            onChange = { inputThumbnail }
                            type = "file" 
                        />
                    </label>
                </div>

                {/* <form onSubmit = { submit }> */}
                    <div className="userInformations">

                        <input
                            value = { name }
                            onChange = { inputName }
                            type = "text" 
                            placeholder = "your full name"
                        />

                        <input
                            value = { email }
                            onChange = { inputEmail }
                            type = "text" 
                            placeholder = "your best e-mail"
                        />

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

                        <button type = "submit" onClick = { submit }> 
                            register and go 
                        </button>
                    
                    </div>
                {/* </form> */}

            </div>
            <NotificationContainer />
        </>
    )
}

export default Register;