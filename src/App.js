
import './App.css';
import Home from "../src/modules/home/Home"
import Navigation from './config/navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../src/config/Store"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
}

export default App;
