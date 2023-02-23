import React from "react";
import { NavLink, Link } from "react-router-dom";
//Se definen los valores de la ruta para cada navlink.
const routes = [
    {
        text: "HomePage",
        to:"/",
        id:"home",
    },
    {
        text: "BlogPage",
        to:"/blog",
        id: "blog",
    },
    {
        text: "ProfilePage",
        to:"/profile",
        id:"profile",
    },
    {
        text: "LoginPage",
        to:"/login",
        id:"login",
    },
    {
        text: "LogoutPage",
        to:"/logout",
        id:"logout",
    },
]
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
function Menu(){
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
    return(
        <nav className="container-fluid mt-2">
            <ul className="row">
                {routes.map((route)=>(
                    <li className="col list-unstyled text-center" key={route.id} >
                        <Link to={route.to}>
                            {route.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export {Menu}