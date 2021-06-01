import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/women">
          <Home />
        </Route>
        <Route path="/men">
          <Home />
        </Route>
        <Route path="/jewelery">
          <Home />
        </Route>
        <Route path="/electronics">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
