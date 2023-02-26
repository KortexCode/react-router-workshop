import React from "react";
import { useLoaderData } from "react-router-dom";
import { BlogLinks } from "../components/BlogLinks";

function BlogPage(props){
    const user = useLoaderData()
    console.log("ENTRE4");
    
    return(
        <>
            <p className="text-center">Soy BlogPage</p>
            <BlogLinks user={user} idToDelete={props.idToDelete} activedDeletePost={props.activedDeletePost}/>
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