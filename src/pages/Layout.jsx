import { Menu } from "../components/Menu"
import { Outlet, useNavigation } from "react-router-dom";

function Layout(){

    const navigation = useNavigation();
  
    return(
       <>
        <Menu className="container"></Menu>
        {navigation.state === "loading" && <div className="alert alert-info my-5">Loading...</div>}
        <Outlet></Outlet>
       </>
    )
}

export {Layout}