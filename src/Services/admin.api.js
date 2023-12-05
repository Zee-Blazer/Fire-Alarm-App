import api from './axios';

export const adminLogin = (admin, password, navigate, setErrMsg) => {
    api.post("/admin/login", { admin, password })
    .then( res => {
        localStorage.setItem("Admin", JSON.stringify(res.data));
        navigate('/admin-dashboard');
    } )
    .catch( err => {
        setErrMsg("Please check details and retry!!!");
    } );
}
