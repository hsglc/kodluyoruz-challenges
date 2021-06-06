import Form from "./components/InputForm/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Bmi from "./pages/Bmi/Bmi";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/what's-bmi">
            <Bmi />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
