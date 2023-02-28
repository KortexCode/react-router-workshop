import React from "react";
import { useOutletContext, useParams} from "react-router-dom";

function ProfilePage(){
    const [authData] = useOutletContext();//Se trea el contexto del Outlet
    const {slug} = useParams();//Se obtiene el parámetro

      //buscando si el usuario pertenece a un rol
      const userAuthorize = authData.rolesList.find((user)=>{
        return user.name.find((name)=>{
                return authData.username === name;
        });    
     })

    return(
        <div className="ms-3">
            <h1 className="text-center">Profile</h1>
            {authData.username === slug && <p className="text-center">Hello, {authData.username}</p>} 
            <h3>Count information</h3>
            <p><b>Interests:</b></p>
            <p>....</p>
            <p><b>Posts created:</b><span>{` ...`}</span></p>
            <p><b>Contributions:</b><span>{` ...`}</span></p>
            {(slug === authData.username || userAuthorize?.role === "admin") && <button>Edit your profile</button>}
        </div>
    )
}

export {ProfilePage}