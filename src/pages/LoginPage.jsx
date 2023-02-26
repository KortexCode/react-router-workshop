import React from "react";
import { Navigate, useNavigate} from "react-router-dom";

function LonginPage(props){
    
    const [inputText, setInputText]  = React.useState("");
    const navigate = useNavigate();
    //Si ya ocurrió un login, se redireccionará a el home
    if(props.username){
       return <Navigate to="/"></Navigate>
    }
    const handleTextChange = (event)=>{
        setInputText(event.target.value)
    }
    //Manejador de evento de click
    const handleLogin = ()=>{
        props.login(inputText);
        navigate("/profile");
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