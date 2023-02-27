import {React, useEffect}  from "react";
import { useOutletContext, useLocation } from "react-router-dom";

function HomePage(){

    const [authData] = useOutletContext();
    const location = useLocation();

    useEffect(()=>{
        authData.upDateLocation(location.pathname);
    });

    console.log("estado", authData.activedDeletePost)
    return(
        <>
            <p className="text-center">Soy HomePage</p>
        </>
    )
}

export {HomePage}