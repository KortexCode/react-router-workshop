import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/auth";

function LonginPage(){
    const auth = useAuth();
    const [inputText, setInputText]  = React.useState("");
   
    const handleTextChange = (event)=>{
        setInputText(event.target.value)
    }
    const handleLogin = ()=>{
        auth.login();
    }

    return(
        <div className="ps-2">
            <h1 className="text-center">LOGIN PAGE</h1>
            <form className="d-flex flex-column align-items-start">
                <label htmlFor="username">Insert UserName</label>
                <input id="username" type="text" value={inputText} onChange={handleTextChange} />
                <button className="mt-2" type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export {LonginPage}