import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

import Home from "./pages/Home";

import Result from "./pages/Result";
import Layout from "./layout/Layout";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
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

          <Route path="/result">
            <Result />
          </Route>
          <Route path="/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
