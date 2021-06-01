import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Header />
      </Switch>
    </Router>
  );
}

export default App;
