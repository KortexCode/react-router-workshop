import React from "react";

function ProfilePage(props){
    return(
        <>
            <h1 className="text-center">Profile</h1>
            <p className="text-center">Hola, {props.username}</p>
        </>
    )
}

export {ProfilePage}