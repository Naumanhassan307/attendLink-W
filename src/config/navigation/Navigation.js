import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MarkAttendance from "../../modules/markAttendance/MarkAttendance"
import OverView from "../../modules/overView/OverView";
import  AddTeacher from "../../modules/addTeacher/AddTeacher"
import DeleteUpdate from "../../modules/deleteUpdate/DeleteUpdate";
import CheckAttendence from "../../modules/checkAttendence/CheckAttendence";
import Login from "../../auth/Login";



function Navigation() {
  return (
    
      <Switch>
        <Route exact path="/">
         <MarkAttendance />
        </Route>
        <Route exact path="/today">
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
