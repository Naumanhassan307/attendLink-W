import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MarkAttendance from "../../modules/markAttendance/MarkAttendance"
import OverView from "../../modules/overView/OverView";
import  AddTeacher from "../../modules/addTeacher/AddTeacher"
import DeleteUpdate from "../../modules/deleteUpdate/DeleteUpdate";
import CheckAttendence from "../../modules/checkAttendence/CheckAttendence";
import Login from "../../auth/login/Login";

import PrivateNavigation from "./PrivateNavigation";
import PublicNavigation from "./PublicNavigation";
import { useSelector } from "react-redux";
import Logout from "../../auth/logout/LogOut";

function Navigation() {

  const authState = useSelector((store) => store.AuthReducer.isLogIn);
  console.log("state is", authState);

  // const authState = true;
 
  return (
    <Switch>
      
      

      <PrivateNavigation exact path="/addRestaurent" auth={authState}>
        <AddTeacher />
      </PrivateNavigation>
      <PrivateNavigation exact path="/allrecords" auth={authState}>
        <DeleteUpdate />
      </PrivateNavigation>
      

      {/* <PublicNavigation exact path="/auth" auth={authState}>
        <Login />
      </PublicNavigation> */}

      {/* <Route exact path="/logout">
        <Logout />
      </Route> */}
    </Switch>
  );
}
export default Navigation;
