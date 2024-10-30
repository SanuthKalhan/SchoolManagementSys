// src/context/AuthContext.jsx
import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => setIsAuth(true);
    const logout = () => setIsAuth(false);

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext }; 
