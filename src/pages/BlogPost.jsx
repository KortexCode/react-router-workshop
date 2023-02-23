import { useParams} from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";

function BlogPost(){
    const navigation = useNavigate(); //hook para la navegación
    const user = useLoaderData(); //Cargar datos de una API

    /* const {slug} = useParams();  //hook para traer el parámetro slug dela url
    const user = data.find(user => user.id == slug)
 */
    const goBack = ()=>{
        navigation("/blog");
    }

    return(
        <div className="container mt-4">
            <h1>Articulo</h1>
            <p>Autor: {user.name}</p>
            <p>City: {user.address.city}</p>
            <p>Autor: {user.email}</p>
            <p>Autor: {user.website}</p>
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