import React from "react";
import {useAuth, } from "../components/auth";


function ProfilePage(){
    const auth = useAuth();
    return(
        <>
            <h1 className="text-center">Profile</h1>
            <p className="text-center">Hola, {auth.username}</p>
        </>
    )
}

export {ProfilePage}