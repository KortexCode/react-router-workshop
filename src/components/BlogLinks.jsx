import { Link } from "react-router-dom"
import { useAuth } from "./auth"

function BlogLinks(props){

    const auth = useAuth();
    let id = null;
    if(auth.activedDeletePost){
       props.userData.map(user =>{
            if(user.id === auth.idToDelete){
                console.log(user.id)
                id = user.id;
            }           
        })
    }
    return (
        <ul>
            {
               props.userData.map(user =>{
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