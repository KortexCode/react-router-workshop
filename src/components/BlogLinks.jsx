import {Link} from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

function BlogLinks(props){
 
    console.log("activedenlink", props.activedDeletePost)
    //Se hay una orden para borrar un post se busca el id de ese post 
    let id = null;
    if(props.activedDeletePost){
       props.user.map(user =>{
            if(user.id === props.idToDelete){
                console.log(user.id)
                id = user.id;
            }           
        })
    }
    return (
        <ul>
            {
               props.user.map(user =>{
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