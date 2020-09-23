import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Navs from './NavBar';
import Dashboard from './Dashboard';
import Preview from './Preview';


function App() {
  return (
    <div className="App">
      <Navs/>
      <Switch>
      <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/dashboard/cardholder/:id"
          component={Dashboard}
          />
          <Route
          exact
          path="/dashboard/card/:id"
          component={Preview}
          />
        </Switch>
    </div>
  );
}

export default App;
