import Home from "./components/Form";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Bmi from "./components/Bmi";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bmi">
          <Bmi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
