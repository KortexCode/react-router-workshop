import React from "react";
import {Navigate } from "react-router-dom";

function AuthRoute(props) {
    if (!props.username){
      return <Navigate to="/login" />
    }
    return props.children
}

export {AuthRoute}