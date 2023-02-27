
import React from "react";

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

function useAuth(){
   
    //Estados
    const [username, setUsername] = React.useState(null);
    const [activedDeletePost, setActivedDeletePost] = React.useState(false);
    const [idToDelete, setIdToDelete] = React.useState(null);
    const [location, setLocation] = React.useState("");//aquí está

    //Acciones de autenticación
    const login = (inputText)=>{
        setUsername(inputText);
    }
    const logout = ()=>{
        setUsername(null);
    }
    //Acciones por autorización
     const activedDelete = (id)=>{
        setActivedDeletePost(true);
        setIdToDelete(id); 
    }
    const upDateLocation = (ref)=>{
        setLocation(ref);
    }
   
    return [{ username,
        activedDeletePost, 
        rolesList,
        idToDelete,
        location,
        login,
        logout,
        activedDelete,
        upDateLocation,
    }]
    
}

export {useAuth}