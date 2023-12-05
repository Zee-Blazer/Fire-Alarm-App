import React, { useState } from 'react';

// API request
import { clientLogin } from '../Services/client';

import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

export const ClientLoginScreen = () =>  {

    const navigate = useNavigate();

    document.title = "Login";

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errMsg, setErrMsg] = useState();

    const doSubmit = () => {
        clientLogin(email, password, setErrMsg, navigate);
    }

    return (
        <div className="general__bg">
            <div className="center__align__cont">
                <div className="bg__fire__service"></div>

                <div className="content__cont">
                    <h2 className="form__header">Login</h2>
                    <p className="form__info">Don't have an account? 
                        <span onClick={ () => navigate("/signup") }>Signup</span>
                    </p>

                    <div className='client__login__cont'>
                        <p className='err__msg'>{ errMsg && errMsg }</p>
                        <div className='input__cont'>
                            <EmailIcon className='input__icon' />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required 
                                value={ email }
                                onChange={ e => setEmail(e.target.value) }
                            />
                        </div>
                        <div className='input__cont'>
                            <KeyIcon className='input__icon' />
                            <input 
                                type="Password" 
                                placeholder="Password" 
                                required 
                                value={ password }
                                onChange={ e => setPassword(e.target.value) }
                            />
                        </div>

                        <button 
                            className="form__btn extra__mt"
                            onClick={ doSubmit }
                        >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
