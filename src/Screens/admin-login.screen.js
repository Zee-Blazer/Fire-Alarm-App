import React, { useState } from 'react';

// API request
import { adminLogin } from '../Services/admin.api';

// Router
import { useNavigate } from 'react-router-dom'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyIcon from '@mui/icons-material/Key';

export const AdminLoginScreen = () => {

    document.title = "Admin Login";

    const navigate = useNavigate();

    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const doSubmit = (e) => {
        e.preventDefault();

        adminLogin(admin, password, navigate, setErrMsg);
    }

    return (
        <div className="general__bg">
            <div className="admin__align">
                <h1 className="admin__form__header">Admin Login</h1>

                <p className='err__msg'>{ errMsg && errMsg }</p>
                <div className='input__cont'>
                    <PersonOutlineIcon className='input__icon' />
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={ admin }
                        onChange={ e => setAdmin(e.target.value) }
                    />
                </div>
                <div className='input__cont'>
                    <KeyIcon className='input__icon' />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={ password }
                        onChange={ e => setPassword(e.target.value) }
                    />
                </div>

                <button 
                    className="admin__login__btn"
                    onClick={  doSubmit }
                >Login</button>
            </div>
        </div>
    )
}
