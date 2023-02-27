import React from "react";
import { useOutletContext } from "react-router-dom";

function ProfilePage(){
    const [authData] = useOutletContext();
    return(
        <>
            <h1 className="text-center">Profile</h1>
            <p className="text-center">Hola, {authData.username}</p>
        </>
    )
}

export {ProfilePage}