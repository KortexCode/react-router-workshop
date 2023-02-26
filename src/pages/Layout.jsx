
import { Outlet, useNavigation } from "react-router-dom";

function Layout(props){

    const navigation = useNavigation();
  
    return(
       <>
        {props.childrens}
        {navigation.state === "loading" && <div className="alert alert-info my-5">Loading...</div>}
        <Outlet></Outlet>
       </>
    )
}

export {Layout}