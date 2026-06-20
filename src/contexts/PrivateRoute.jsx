import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loding from '../components/Loading/Loding';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = use(AuthContext)

    if (loading) {
        return <Loding></Loding>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;