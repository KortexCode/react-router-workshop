import React from "react";
import { Link } from "react-router-dom";
import { useAuth} from "../components/auth";

function LogoutPage(){
    const auth = useAuth();
    const handleLogout = ()=>{
        auth.logout();
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