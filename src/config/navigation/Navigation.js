import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from  "../../modules/home/Home"
import OverView from "../../modules/overView/OverView";
import  AddTeacher from "../../modules/addTeacher/AddTeacher"



function Navigation() {
  return (
    
      <Switch>
        <Route exact path="/">
         <OverView />
        </Route>
        <Route exact path="/addteacher">
          <AddTeacher />
        </Route>
        <Route exact path="/updaterecord">
          <OverView />
        </Route>
        <Route exact path="/chechkrecord">
          <OverView />
        </Route>
      </Switch>
    
  );
}
export default Navigation;
