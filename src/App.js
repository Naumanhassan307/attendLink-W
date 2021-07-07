
import './App.css';
import Home from "../src/modules/home/Home"
import Navigation from './config/navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Home />
      {/* <Navigation /> */}
    </Router>
  );
}

export default App;
