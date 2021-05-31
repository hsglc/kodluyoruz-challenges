import Home from "./components/Form";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Result from "./components/Result";
import Bmi from "./components/Bmi";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/bmi">What's BMI</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bmi">
          <Bmi />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
