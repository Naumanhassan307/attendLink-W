import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import OverView from "../../modules/overView/OverView";
import  AddTeacher from "../../modules/addTeacher/AddTeacher"
import DeleteUpdate from "../../modules/deleteUpdate/DeleteUpdate";
import CheckAttendence from "../../modules/checkAttendence/CheckAttendence";
import Login from "../../auth/Login";



function Navigation() {
  return (
    
      <Switch>
        <Route exact path="/">
         <OverView />
        </Route>
        <Route exact path="/addteacher">
          <AddTeacher />
        </Route>
        <Route exact path="/allrecords">
          <DeleteUpdate />
        </Route>
        <Route exact path="/chechkrecord">
          <CheckAttendence />
        </Route>
        <Route exact path="/auth">
          <Login />
        </Route>
      </Switch>
    
  );
}
export default Navigation;
