import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { useSelector } from "react-redux";

import MainPage from "../../foodLink/mainPage/MainPage";
import ResLogin from "../../foodLink/resLogin/ResLogin";
import ResSignUp from "../../foodLink/signUp/SignUp";
import Navigation from "../navigation/Navigation";
import Home from "../../modules/home/Home";
import PrivateNavigation from "../navigation/PrivateNavigation";

function ResNavigation() {
  // const authState = useSelector((store) => store.AuthReducer.isLogIn);
  // console.log("state is", authState);

  const authState = true;

  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/auth/login">
        <ResLogin />
      </Route>
      <Route exact path="/auth/signup">
        <ResSignUp />
      </Route>
      <PrivateNavigation exact path="/addRestaurent" auth={authState}>
        <Home />
      </PrivateNavigation>
    </Switch>
  );
}
export default ResNavigation;
