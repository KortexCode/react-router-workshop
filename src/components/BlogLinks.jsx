import { Link, useLoaderData } from "react-router-dom"

function BlogLinks(props){
    const userData = useLoaderData();//cargamos los datos de la API
    //Se hay una orden para borrar un post se busca el id de ese post 
    let id = null;
    if(props.activedDeletePost){
       userData.map(user =>{
            if(user.id === props.idToDelete){
                console.log(user.id)
                id = user.id;
            }           
        })
    }
    return (
        <ul>
            {
               userData.map(user =>{
                    if(user.id === id){
                        return null;
                    }
                    return(
                        <li key={user.username}>
                            <Link to={`/blog-post/${user.id}`} >
                                {`Ir al post:${user.id}`}
                            </Link>
                        </li>
                    )
                })
            }          
        </ul>
    )
}

export {BlogLinks}