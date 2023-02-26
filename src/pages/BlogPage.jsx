import React from "react";

function BlogPage(props){
    return(
        <>
            <p className="text-center">Soy BlogPage</p>
            {props.children}
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