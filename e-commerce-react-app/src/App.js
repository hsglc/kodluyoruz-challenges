import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

import Home from "./pages/Home";
import Header from "./layout/Header";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Header />
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
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
