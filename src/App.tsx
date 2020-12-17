import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentList from "scenes/Home/components/ComponentList/ComponentList";
import ComponetPv from "scenes/Home/components/ComponentPreview/ComponentPreview";
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/component/:comp_name" component={ComponetPv} />
        <Route path="/" exact component={ComponentList} />
      </Switch>
    </Router>
  </div>
);

export default App;
