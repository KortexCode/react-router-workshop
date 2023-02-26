
import React from "react";
import {useNavigate} from "react-router-dom";

function useAuth(){

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

    const [username, setUsername] = React.useState(null);
    const [activedDeletePost, setActivedDeletePost] = React.useState(false);
    const [idToDelete, setIdToDelete] = React.useState(null);
    const navigate = useNavigate();

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

    return {
        username,
        activedDeletePost, 
        rolesList,
        idToDelete,
        login,
        logout,
        activedDelete,
    }; 
}

export {useAuth}