import { useParams} from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";

function BlogPost(){
    const auth = useAuth();//Contexto
    const navigation = useNavigate(); //hook para la navegación
    const user = useLoaderData(); //Cargar datos de una API
    /* const {slug} = useParams();  //hook para traer el parámetro slug dela url
    const user = data.find(user => user.id == slug)
 */
    //buscando si el usuario pertenece a un rol
    const userAuthorize = auth.rolesList.find((user)=>{
       return user.name.find((name)=>{
            return auth.username === name;
       });
    })
    //buscando permisos especiales si es un autor
    const authorName = userAuthorize?.name.find(author =>{
        return author === auth.username;
    })
    //HandleEvent
    const goBack = ()=>{
        navigation("/blog");
    }
    const handleDeletePost = ()=>{
        auth.activedDelete(user.id);
    }
    return(
        <div className="container mt-4">
            <h1>Articulo</h1>
            <p>Autor: {user.name}</p>
            <p>City: {user.address.city}</p>
            <p>Autor: {user.email}</p>
            <p>Website: {user.website}</p>
            {userAuthorize?.role === "admin" && <button onClick={handleDeletePost}>Delete Post</button>}
            {authorName === user.name && <button onClick={handleDeletePost}>Delete Post</button>}
            <button onClick={goBack}>Volver atrás</button>
        </div>
    )
}

async function loaderBlogPost({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}`);
    const data = await res.json();
    if(!res.ok){
        throw ({
            status:res.status,
            statusText: "no encuentra los datos",
            message:"no encontrado",
        } )
    } 

    return data
}

export {BlogPost}
export {loaderBlogPost}