import React, { useState, useEffect } from 'react';

// Routing
import { useNavigate } from 'react-router-dom';

// API request
import { getAllClient, getFireBuilding, resolved } from '../Services/client';

// Material UI Icon
import DashboardIcon from '@mui/icons-material/Dashboard';

export const AdminDashboardScreen = () => {

    const navigate = useNavigate();

    document.title = "Admin Dashboard";

    const [allClient, setAllClient] = useState();
    const [firebuilding, setFireBuilding] = useState();

    const logout = () => {
        localStorage.removeItem("Admin");
        navigate('/admin-login')
    }

    useEffect( () => {
        if(!localStorage.getItem("Admin")) navigate('/admin-login')
    }, [] )

    useEffect( () => {
        getAllClient(setAllClient);
        getFireBuilding(setFireBuilding);
    }, [] )

    return (
        <div className="client__dashboard">
            <div className="admin__dashboard__cont">
                <div className='header__nav'>
                    <div>
                        <DashboardIcon />
                        <h2>Fire Alarm Notification System</h2>
                    </div>
                    <p onClick={ logout }>Logout</p>
                </div>

                { firebuilding && firebuilding.map( (item, key) => {
                    return (
                        <div className='alart__cont' key={ key }>
                            <div className='fire__alarm__alert'>
                                <p>FIRE ALARM</p>
                            </div>
                            
                            <div className='alarm__details'>
                                <p>Location: <span>{ item.location }</span></p>
                                <p>Building Type: <span>{ item.buildingType }</span></p>

                                <button
                                    onClick={ () => resolved(item.email) }
                                >Resolved</button>
                            </div>
                        </div>
                    )
                } ) }

                <div className='admin__record__cont'>
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>Building Type</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                        { allClient && allClient.map( (item, key) => {
                            return (
                                <tr key={ key }>
                                    <td>{ key+1 }</td>
                                    <td>{ item.buildingType }</td>
                                    <td>{ item.location }</td>
                                    <td className={ !item.status ? "safe" : 'fire' }>
                                        { !item.status ? "Safe" : "Fire" }
                                    </td>
                                </tr>
                            )
                        } ) }
                    </table>
                </div>
            </div>
        </div>
    )
}
