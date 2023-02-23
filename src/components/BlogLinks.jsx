import { Link } from "react-router-dom"

function BlogLinks(props){
    return (
        <ul>
            {props.userData.map(user =>(
                <li key={user.username}>
                    <Link to={`/blog-post/${user.id}`} >
                        {`Ir al post:${user.id}`}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export {BlogLinks}