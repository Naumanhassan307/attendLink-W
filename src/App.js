
import "./App.css";
import Home from "../src/modules/home/Home";
import Navigation from "./config/navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/config/Store";
import MainPage from "./foodLink/mainPage/MainPage";
import ResSignUp from "./foodLink/signUp/SignUp";
import ResLogin from "./foodLink/resLogin/ResLogin";
import ResNavigation from "./config/resNavigation/ResNavigation";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Home /> */}
        {/* <MainPage /> */}
        {/* <ResSignUp /> */}
        {/* <ResLogin /> */}
        <ResNavigation />
      </Router>
    </Provider>
  );
}

export default App;
