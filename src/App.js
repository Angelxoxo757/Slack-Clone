import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  // STYLED COMPONENTS

  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/">
              <h1>Homepage</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
