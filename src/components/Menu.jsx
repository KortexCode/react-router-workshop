import React from "react";
import { Link } from "react-router-dom";
import {useAuth} from "./auth"
//Se definen los valores de la ruta para cada navlink.
const routes = [
    {
        text: "HomePage",
        to:"/",
        id:"home",
        private: false,
    },
    {
        text: "BlogPage",
        to:"/blog",
        id: "blog",
        private: false,
    },
    {
        text: "ProfilePage",
        to:"/profile",
        id:"profile",
        private: true,
    },
    {
        text: "LoginPage",
        to:"/login",
        id:"login",
        private: false,
    },
    {
        text: "LogoutPage",
        to:"/logout",
        id:"logout",
        private: true,
    },
];

function Menu(){

    const auth = useAuth();

    return(
        <nav className="container-fluid mt-2">
            <ul className="row">
                {routes.map((route)=>{
                    if(!auth.username && route.private){
                        return null;
                    }
                    if(route.to === "/login" && auth.username){
                        return null;
                    }
                    return (<li className="col list-unstyled text-center" key={route.id} >
                        <Link to={route.to}>
                            {route.text}
                        </Link>
                    </li>)
                })}
            </ul>
        </nav>
    )
    /*   return(
          <nav>
              <ul className="nav__ul">
                  {routes.map((route)=>(
                      <li key={route.id} >
                          <NavLink to={route.to} 
                              style={({isActive})=> (isActive ? activeStyle : inActiveStyle)}
                          >
                              {route.text}
                          </NavLink>
                      </li>
                  ))}
              </ul>
          </nav>
      ) */
}

export {Menu}

//Se definen los estilos que permite el navlink en cada función.
const activeStyle = {
    color: "red",
    textDecoration: "none",
}
//
const inActiveStyle = {
    color: "blue",
    textDecoration: "none",
}