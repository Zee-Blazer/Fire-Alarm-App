import React, { useState, useEffect } from 'react';

// Routing
import { useNavigate } from 'react-router-dom';

// API request
import { getClient, emergence } from '../Services/client';

const createData = (s) => {
    let data = [];
    for(let i = 0; i < s.length; i++){
        // setData([ ...data, { section: s[i], tem: Math.floor(Math.random()*64) } ])
        data.push({ section: s[i], temp: Math.floor(Math.random()*64) });
    }

    return data;
}

const getTotal = (data) => {
    let total = 0;
    for(let i = 0; i < data.length; i++){
        total = total + data[i].temp;
        // console.log(total + data[i].temp);
    }

    return total/data.length;
}

export const ClientDashboardScreen = () => {

    const navigate = useNavigate();

    document.title = "Dashboard";

    const [section, setSections] = useState();
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [location, setLocation] = useState("");
    const [info, setInfo] = useState();
    const [change, setChange] = useState(false);

    const logout = () => {
        localStorage.removeItem("client");
        navigate("/login");
    }

    const alarmOn = () => {
        emergence();
        setChange(true)
    }

    useEffect( () => {
        if(!localStorage.getItem("client"))  navigate('/login');
    }, [] )

    useEffect( () => {
        if(localStorage.getItem("client")){
            // console.log(JSON.parse(localStorage.getItem("client")));
            getClient(localStorage.getItem("email"), setInfo);
        }
    }, [] )

    useEffect( () => {
        if(info){
            setSections(info.sections);
            setLocation(info.location);
        }
    }, [info] ) 

    useEffect( () => {
        if(section){
            setData(createData(section));
        }
    }, [section] )

    useEffect( () => {
        if(data) setTotal(getTotal(data));
    }, [data] )

    return (
        <div className="client__dashboard">
            <div className="client__dashboard__cont">
                <p 
                    className="client__logout__act"
                    onClick={ logout }
                >Logout</p>

                <div className={change ? "client__status__bar fire__building"  : "client__status__bar"}>
                    <p>Building Temperature</p>
                    <h1>{ Math.round(total) }°C</h1>
                    <div className="fire__alarm" onClick={ alarmOn }>
                        <p>FIRE</p>
                    </div>
                </div>

                <div className="display__table__cont">
                    <table className="client__table">
                        <tr>
                            <th className="larger">Section (Code name)</th>
                            <th>Temperature (°C)</th>
                        </tr>
                        { data && data.map( (item, key) => {
                            // setTotal(total+item.temp);
                            return (
                                <tr>
                                    <td>{ item.section }</td>
                                    <td>{ item.temp }°C</td>
                                </tr>
                            )
                        } ) }
                    </table>

                    <div className="classified__info">
                        <p>Average Building Temperature = { Math.round(total) }°C</p>
                        <p>Location: { location }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
