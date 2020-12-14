import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentList from "scenes/Home/components/ComponentList/ComponentList";
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        {/* <Route path="/" component={() => <h1>Home</h1>} /> */}
        <Route path="/" component={ComponentList} />
      </Switch>
    </Router>
  </div>
);

export default App;
