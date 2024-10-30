import React , { useContext } from "react";
import { Navigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";


const ProtectedRoute = ({ childern }) => {
    const {isAuth} = useContext(AuthContext);


    if(!isAuth){
        return <Navigate to="/" replace/>
    }

    return childern;

};

export default ProtectedRoute;
