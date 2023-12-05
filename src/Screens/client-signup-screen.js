import React, { useState } from 'react';

// Routing
import { useNavigate } from 'react-router-dom';

// API request
import { clientSignup } from '../Services/client';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export const ClientSignupScreen = () => {

    const navigate = useNavigate();

    document.title = "Sign up";

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const doSubmit = () => {
        clientSignup(fullname, email, phone, password, navigate);
    }

    return (
        <div className="general__bg">
            <div className="center__align__cont">
                <div className="bg__fire__service"></div>

                <div className="content__cont">
                    <h2 className="form__header">Sign Up</h2>
                    <p className="form__info">
                        Already have an account? <span onClick={ () => navigate("/login") }>Login</span>
                    </p>

                    <div className='client__signup__cont'>
                        <div className='input__cont'>
                            <PersonOutlineIcon className='input__icon' />
                            <input 
                                type="text" 
                                placeholder="Fullname" 
                                required 
                                value={ fullname }
                                onChange={ e => setFullname(e.target.value) }
                            />
                        </div>
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
                            <PhoneAndroidIcon className='input__icon' />
                            <input 
                                type="text" 
                                placeholder="Phone" 
                                required 
                                value={ phone }
                                onChange={ e => setPhone(e.target.value) }
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
                            className="form__btn"
                            onClick={ doSubmit }
                        >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
