import React from "react";
import {Navigate, useOutletContext} from "react-router-dom";

function AuthRoute(props) {
    const [authData] =useOutletContext()
    if (!authData.username){
      return <Navigate to="/login" />
    }
    return props.children
}

export {AuthRoute}