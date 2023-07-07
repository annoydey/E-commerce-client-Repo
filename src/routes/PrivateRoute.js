import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import './PrivateRoute.css'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-dots loading-md loader"></span>
    }

    if(user && user.uid){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;