import React, { useState } from 'react';

// Routing
import { useNavigate } from 'react-router-dom';

// API request
import { completeInfo } from '../Services/client';

// Material Icon
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DnsIcon from '@mui/icons-material/Dns';
import LinkIcon from '@mui/icons-material/Link';
import SensorsIcon from '@mui/icons-material/Sensors';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export const ClientInfoScreen = () => {

    const navigate = useNavigate();

    document.title = "User Info";

    const [sections, setSections] = useState([]);
    const [buildingType, setBuildingType] = useState();
    const [location, setLocation] = useState();
    const [ipAddress, setIpAddress] = useState();
    const [apiLink, setApiLink] = useState();
    const [sensor, setSensor] = useState();

    const addToSections = () => {
        setSections([...sections, sensor]);
        setSensor("");
    }

    const removeItemFromSections = (ele) => setSections(sections.filter( e => e != ele ));

    const doSubmit = () => {
        completeInfo(buildingType, location, ipAddress, apiLink, sections, navigate);
    }

    return (
        <div className="general__bg">
            <div className="center__align__cont">
                <div className="bg__fire__service"></div>

                <div className="content__cont">
                    <h2 className="form__header">Fill Info</h2>
                    <p className="form__info">Please completely fill the necessary information</p>

                    <div>
                        <div className='input__cont'>
                            <ApartmentIcon className='input__icon' />
                            <select
                                value={ buildingType }
                                onChange={ e => setBuildingType(e.target.value) }
                            >
                                <option value="Residential Building">Residential Building</option>
                                <option value="Commercial Building">Commercial Building</option>
                                <option value="Office Building">Office Building</option>
                                <option value="Presidential Building">Presidential Building</option>
                            </select>
                        </div>
                        <div className='input__cont'>
                            <LocationOnIcon className='input__icon' />
                            <input 
                                type="text" 
                                placeholder="Location" 
                                required 
                                value={ location }
                                onChange={ e => setLocation(e.target.value) }
                            />
                        </div>
                        <div className='input__cont'>
                            <DnsIcon className='input__icon' />
                            <input 
                                type="text" 
                                placeholder="System IP Address" 
                                required 
                                value={ ipAddress }
                                onChange={ e => setIpAddress(e.target.value) }
                            />
                        </div>
                        <div className='input__cont'>
                            <LinkIcon className='input__icon' />
                            <input 
                                type="text" 
                                placeholder="API Link" 
                                required 
                                value={ apiLink }
                                onChange={ e => setApiLink(e.target.value) }
                            />
                        </div>

                        <div className='adder__options'>
                            { sections.length > 0 &&  
                                sections.map( (item, key) => (
                                    <p key={ key }>{ item } <span>
                                            <CloseIcon 
                                                className='close__icon' 
                                                onClick={ () => removeItemFromSections(item) } 
                                            />
                                        </span>
                                    </p>
                                ) )
                            }
                        </div>

                        <div className='input__cont'>
                            <SensorsIcon className='input__icon' />
                            <input 
                                type="text" 
                                placeholder="Sensor Location" 
                                required 
                                value={ sensor }
                                onChange={ e => setSensor(e.target.value) }
                            />
                            <AddIcon className='input__icon adder' onClick={ addToSections } />
                        </div>

                        <button 
                            className="form__btn"
                            onClick={ doSubmit }
                        >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
