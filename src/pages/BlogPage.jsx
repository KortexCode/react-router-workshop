import React from "react";
import { useLoaderData } from "react-router-dom";
import { BlogLinks } from "../components/BlogLinks";

function BlogPage(){
    const user = useLoaderData()
    return(
        <>
            <p className="text-center">Soy BlogPage</p>
            <BlogLinks user={user}/>
        </>
    )
}

const postLoader = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const post = await res.json();
    if(!res.ok){
        throw ({
            status:res.status,
            statusText: "no encuentra los datos",
            message:"no encontrado",
        } )
    } 
    return post
}

export {postLoader}
export {BlogPage}