
import React from "react";

function useAuth(){
    //lista de roles
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
    //Estados
    const [username, setUsername] = React.useState(null);
    const [activedDeletePost, setActivedDeletePost] = React.useState(false);
    const [idToDelete, setIdToDelete] = React.useState(null);
    console.log("activedauth",activedDeletePost)
    console.log("idenauth",idToDelete)
    //Acciones de autenticación
    const login = (inputText)=>{
        setUsername(inputText);
    }
    const logout = ()=>{
        setUsername(null);
    }
    //Acciones por autorización
    const activedDelete = (id)=>{
        console.log("ENTRE");
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