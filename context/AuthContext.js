import React, { useContext, createContext, useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});

    const baseUrl = 'http://172.20.10.2:3000'

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser, baseUrl }}>
            {children}
        </AuthContext.Provider>
    );
}


