
import React from "react";
import { Menu } from "../components/Menu";
import { Outlet, useNavigation, } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Layout(){
    const [authData] = useAuth();//Aquí traigo el hook
    const navigation = useNavigation();
  
    return(
       <>
        <Menu username={authData.username} ></Menu>
        {navigation.state === "loading" && <div className="alert alert-info my-5">Loading...</div>}
        <Outlet context={[authData]}></Outlet>
       </>
    )
}

export {Layout}