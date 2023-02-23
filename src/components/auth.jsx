import React from "react";
import { Outlet, useNavigate } from "react-router-dom";



const AuthContext = React.createContext();

function AuthProvider(){
    const [username, setUsername] = React.useState(null);
    const navigate = useNavigate();

    const login = ()=>{
        navigate("/profile");
    }
    const logout = ()=>{
        navigate("/");
    }
    
    const auth = {username, login, logout};
    return(
        <AuthContext.Provider value={auth}>
            <Outlet></Outlet>
        </AuthContext.Provider>
    )
}

function useAuth(){
    const data = React.useContext(AuthContext);
    return data
}

export {AuthProvider, useAuth}