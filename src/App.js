
import "./App.css";
import Home from "../src/modules/home/Home";
import Navigation from "./config/navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/config/Store";
import MainPage from "./foodLink/mainPage/MainPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Home /> */}
        <MainPage />
      </Router>
    </Provider>
  );
}

export default App;
