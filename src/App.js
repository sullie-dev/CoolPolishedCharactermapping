import React from 'react';
import './App.css';
import ListCards from './ListCards'
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Navs from './NavBar';


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
          path="/:id"
          component={ListCards}
          />
        </Switch>
    </div>
  );
}

export default App;
