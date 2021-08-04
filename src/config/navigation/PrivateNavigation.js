

import {  Route,Redirect } from "react-router-dom";

function PrivateNavigation({children, auth, ...rest}){

    return(
        <Route {...rest} render={()=> auth? children : <Redirect to={"/auth"}/>}/>
    )
}
export default PrivateNavigation;
