import React from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

const rolesList = [
    {
        role:"admin",
        name:["Homura", "Jotaro"],
    },
    {
        role:"author",
        name:["Ervin Howell", "Kurtis Weissnat"],
    }
]

const AuthContext = React.createContext();

function AuthProvider(props){
    const [username, setUsername] = React.useState(null);
    const [activedDeletePost, setActivedDeletePost] = React.useState(false);
    const [idToDelete, setIdToDelete] = React.useState(null);
    const navigate = useNavigate();
   
    console.log("el estado", props.stateTest)
    const login = (inputText)=>{
        setUsername(inputText);
        navigate("/profile");
    }
    const logout = ()=>{
        navigate("/");
        setUsername(null);
    
    }
    const activedDelete = (id)=>{
        navigate("/blog");
        setActivedDeletePost(true);
        setIdToDelete(id);
    }
    const auth = {username, login, logout, rolesList, activedDelete, activedDeletePost, idToDelete};
    return(
        <AuthContext.Provider value={auth}>
            <Outlet></Outlet>
        </AuthContext.Provider>
    )
}
//Este componente redirecciona o renderiza lo que contenga como hijos dependiendo de una autenticación
function AuthRoute(props) {
    const auth = useAuth();

    if (!auth.username){
      return <Navigate to="/login" />
    }
    return props.children
}

function useAuth(){
    const data = React.useContext(AuthContext);
    return data
}

export {AuthProvider, useAuth, AuthRoute}