import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage(props){
    const navigate = useNavigate();
    const handleLogout = ()=>{
        props.logout();
        navigate("/");
    }
    return(
        <>
            <h1 className="text-center">LOGIN PAGE</h1>
            <form className="d-flex flex-column align-items-start ps-2">
                <label htmlFor="username">Are you sure to logout?</label>
                <button className="mt-2" type="button" onClick={handleLogout}>Logout</button>
            </form>
        </>
    )
}

export {LogoutPage}