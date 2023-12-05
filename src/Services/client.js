import api from './axios';

export const clientSignup = (fullname, email, phone, password, navigate) => {
    api.post("/client/new", { fullname, email, phone, password })
    .then( res => {
        // console.log(res.data.doc.email);
        localStorage.setItem("email", res.data.doc.email);
        navigate('/fill-info');
    } )
    .catch( err => console.log(err) );
}

export const clientLogin = (email, password, setErrMsg, navigate) => {
    api.post("/client/login", { email, password })
    .then( res => {
        // console.log(res.data);
        localStorage.setItem("client", JSON.stringify(res.data));
        navigate('/dashboard');
    } )
    .catch( err => {
        console.log(err)
        setErrMsg("Please Check Your Email and Password!!!");
    } );
}

export const completeInfo = (buildingType, location, ipAddress, apiLink, sections, navigate) => {
    api.post("/client/fill-info", { email: localStorage.getItem("email"), details: {
        buildingType, location, ipAddress, apiLink, sections, status: false
    } })
    .then( res => {
        // console.log(res.data.doc);
        localStorage.setItem("client", JSON.stringify(res.data.doc));
        navigate('/dashboard');
    })
    .catch( err => console.log(err) );
}

export const emergence = () => {
    api.post('/client/fill-info', { email: localStorage.getItem("email"), details: { status: true } })
    .then( res => {

        // Email API
        api.post(
            "/client/send-email", 
            { header: "FIRE ALARM", text: "There is a fire alerm at you Building" }
        )
        .then( doc => console.log(doc.data) )
        .catch( err => console.log(err) );

        // SMS API
        api.post('/client/send-sms', { msg: "FIRE ALARM!!\nThere is a fire Alarm at your building" })
        .then( doc => console.log(doc.data) )
        .catch( err => console.log(err.data) );
    } )
    .catch( err => console.log(err) );
}

export const resolved = (email) => {
    api.post('/client/fill-info', { email, details: { status: false } })
    .then( res => {
        // Email API
        api.post(
            "/client/send-email", 
            { header: "RESOLVED FIRE", text: "The Fire insidence at your building has been resolved" }
        )
        .then( doc => console.log(doc.data) )
        .catch( err => console.log(err) );

        // SMS API
        api.post(
            '/client/send-sms', 
            { msg: "Resolved!!\nThe Fire insidence at your building has been resolved" }
        )
        .then( doc => console.log(doc.data) )
        .catch( err => console.log(err.data) );
    } )
    .catch( err => console.log(err) );
}

export const getClient = (email, setInfo) => {
    api.get(`/client//specific/${email}`)
    .then( res => {
        // console.log(res.data);
        setInfo(res.data);
    } )
    .catch( err => console.log(err) );
};

export const getAllClient = (setAllClient) => {
    api.get('/client/all-clients')
    .then( res => {
        // console.log(res.data)
        setAllClient(res.data);
    } )
    .catch( err => console.log(err) );
}

export const getFireBuilding = (setFireBuilding) => {
    api.get("/client/fire-building")
    .then( res => {
        setFireBuilding(res.data);
        // console.log(res.data)
    } )
    .catch( err => console.log(err) );
}
