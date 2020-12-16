import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentList from "scenes/Home/components/ComponentList/ComponentList";
import ComponetPv from "scenes/Home/components/ComponentPreview/ComponentPreview";
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/component/:id" component={ComponetPv} />
        <Route path="/" component={ComponentList} />
      </Switch>
    </Router>
  </div>
);

export default App;
