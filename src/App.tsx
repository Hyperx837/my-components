import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CompView } from "scenes/ComponentPage";
import CompList from "scenes/Home";
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/components/:compName" component={CompView} />
        <Route path="/" exact component={CompList} />
      </Switch>
    </Router>
  </div>
);

export default App;
