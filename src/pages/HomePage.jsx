import React from "react";
import { useOutletContext } from "react-router-dom";

function HomePage(){

    const [authData] = useOutletContext()

    console.log("estado", authData.activedDeletePost)
    return(
        <>
            <p className="text-center">Soy HomePage</p>
        </>
    )
}

export {HomePage}